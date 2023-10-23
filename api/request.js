const database = require("../database");
const { collections } = require("../database");
const { ObjectId } = require("mongodb");

const request = module.exports;

request.createRequest = async (req) => {
    const { userId } = req.user;
    const { category, requirement, time, fare } = req.body;

    const payload = {
        uid: userId,
        createdAt: new Date().toISOString(),
        status: 'pending',
    };

    payload.category = category;
    payload.time = time;
    payload.fare = fare;
    payload.requirement = requirement;

    return await database.client.collection(collections.REQUESTS).insertOne(payload);
};

request.getRequests = async (req) => {
    const { userId } = req.user;

    const limit = parseInt(req.query.limit) || 5;
    const page = parseInt(req.query.page) || 1;
    const startTime = req.query.startTime || 0;
    const endTime = req.query.endTime || 0;
    const { status, role } = req.query;

    const key = {}

    status && (key.status = status);
    role === 'rider' ? (key.acceptedBy = userId) : (key.uid = userId);


    if (startTime && endTime) {
        key.time = {
            $gte: startTime,
            $lte: endTime,
        }
    }

    const count = await database.client.collection(collections.REQUESTS).countDocuments(key);
    const totalPages = Math.ceil(count / limit);
    const offset = (page - 1) * limit;

    const requests = await database.client.collection(collections.REQUESTS)
        .find(key)
        .skip(offset)
        .limit(limit)
        .toArray();

    return {
        requests,
        totalPages,
        currentPage: page,
        totalDocuments: count,
    };
};
