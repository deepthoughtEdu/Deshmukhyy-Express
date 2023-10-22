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
