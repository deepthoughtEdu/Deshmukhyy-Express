const database = require("../database");
const { collections } = require("../database");

const create = module.exports;

create.createRequest = async (req) => {
    const { userId } = req.user;
    const { item, itemNeeded, drop, dropLocation, time, fare } = req.body;
    
    const payload = {
        uid: userId,
    };

    if (!item && !drop) throw new Error('Item or drop is required');
    if (!time || !fare) throw new Error('Time & fair is required');
    payload.time = time;
    payload.fare = fare;

    if (item === 'true') {
        if(!itemNeeded) throw new Error('Item needed is required');
        payload.item = true;
        payload.itemNeeded = itemNeeded;
    }

    if (drop === 'true') {
        if(!dropLocation) throw new Error('Drop location is required');
        payload.drop = true;
        payload.dropLocation = dropLocation;
    }

    return await database.client.collection(collections.REQUESTS).insertOne(payload);
}

create.getRequests = async (req) => {
    const { userId } = req.user;

    const limit = parseInt(req.query.limit) || 5;
    const page = parseInt(req.query.page) || 1;
    const uid = req.query.uid || userId;
    const startTime = req.query.startTime || 0;
    const endTime = req.query.endTime || 0;

    const key ={
        uid,
    }

    if(startTime && endTime) {
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
}
