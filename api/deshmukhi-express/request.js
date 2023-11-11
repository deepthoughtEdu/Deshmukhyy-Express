const database = require("../../database");
const { collections } = require("../../database");
const { ObjectId } = require("mongodb");
const utilities = require("../../utilities")

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
