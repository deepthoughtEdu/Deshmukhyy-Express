const database = require("../database");
const { collections } = require("../database");
const { ObjectId } = require("mongodb");
const utilities = require("../utilities")

const request = module.exports;

request.create = async (req) => {
    const { userId } = req.user;
    const { category, requirement, time, fare } = req.body;

    const payload = {
        uid: userId,
        createdAt: new Date().toISOString(),
        status: 'approved',
    };

    payload.category = category;
    payload.time = time;
    payload.fare = fare;
    payload.requirement = requirement;

    return await database.client.collection(collections.REQUESTS).insertOne(payload);
};

request.get = async (req) => {
    const { userId } = req.user;

    const limit = parseInt(req.query.limit) || 5;
    const page = parseInt(req.query.page) || 0;
    const offset = page*limit;
    const key = {uid:userId}

    const count = await database.client.collection(collections.REQUESTS).countDocuments(key);
    const requests = await database.client.collection(collections.REQUESTS).find(key).skip(offset).limit(limit).toArray();

    return utilities.paginate(`/api/request${req.url}`, requests, count, limit, page);
};
