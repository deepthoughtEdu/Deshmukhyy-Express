const database = require("../database");
const { collections } = require("../database");
const { ObjectId } = require("mongodb");
const utilities = require("../utilities")

const request = module.exports;
const validStatus = ['approved', 'waiting', 'cancelled'];

request.create = async (req) => {
    const { userId } = req.user;
    const { category, requirement, time, fare } = req.body;

    const payload = {
        uid: userId,
        createdAt: new Date().toISOString(),
        status: 'waiting',
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

    const collection = await Promise.all(requests.map(async item => {
        const {uid} = item;
        const user = await database.client.collection(collections.USERS).findOne({userId: uid});
        item.user = utilities.filterObjectByKeys(user, ['username', 'email'])
        return item;
    }));

    return utilities.paginate(`/api/request${req.url}`, collection, count, limit, page);
};

request.update = async (req) => {
    const { userId } = req.user;
    const { status } = req.body;
    const id = req.params.id;

    const searchKeys = { uid:userId };
    const payload = {}
    if (!validStatus.includes(status)) throw new Error("Invalid status supplied!");
    if (!ObjectId.isValid(id)) throw new Error("Invalid request ID!")
    
    searchKeys._id = new ObjectId(id);
    console.log(searchKeys)
    payload.status = status;
    payload.updatedAt = utilities.getISOTimestamp();

    await database.client.collection(collections.REQUESTS).findOneAndUpdate(searchKeys, { $set: payload });
};
