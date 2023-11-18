const database = require("../../database");
const { collections } = require("../../database");
const { ObjectId } = require("mongodb");
const utilities = require("../../utilities");

const request = module.exports;

request.create = async (req) => {
    const { userId } = req.user;
    const { category, requirement, time, fare } = req.body;

    const payload = {
        uid: userId, 
        createdAt: new Date().toISOString(),
        status: 'approved', 
        category: category,
        time: time,
        fare: fare,
        requirement: requirement
    };

    return await database.client.collection(collections.REQUESTS).insertOne(payload);
};

request.get = async (req) => {

    const limit = parseInt(req.query.limit) || 5;
    const page = parseInt(req.query.page) || 0;
    const offset = page*limit;

    const key = {}    
    const [count, requests] = await Promise.all([
        database.client.collection(collections.REQUESTS).countDocuments(key),
        database.client.collection(collections.REQUESTS).find(key).skip(offset).limit(limit).toArray()
    ]);

    const requestsWithUserData = await Promise.all(requests.map(async item => {
        const {uid} = item;
        const user = await database.client.collection(collections.USERS).findOne({userId: uid});
        item.user = utilities.filterObjectByKeys(user, ['username', 'email'])
        return item;
    }));

    return utilities.paginate(`/api/request${req.url}`, requestsWithUserData, count, limit, page);
};