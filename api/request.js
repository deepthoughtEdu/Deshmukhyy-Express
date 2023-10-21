const database = require("../database");
const { collections } = require("../database");

const request = module.exports;

request.createRequest = async (req) => {
    const { userId } = req.user;
    const { item, itemNeeded, drop, dropLocation, time, fare } = req.body;

    const payload = {
        uid: userId,
        createdAt: new Date().toISOString(),
        status: 'pending',
    };

    if (!item && !drop) throw new Error('Item or drop is required');
    if (!time || !fare) throw new Error('Time & fair is required');
    payload.time = time;
    payload.fare = fare;

    if (item === 'true') {
        if (!itemNeeded) throw new Error('Item needed is required');
        payload.item = true;
        payload.itemNeeded = itemNeeded;
    }

    if (drop === 'true') {
        if (!dropLocation) throw new Error('Drop location is required');
        payload.drop = true;
        payload.dropLocation = dropLocation;
    }

    return await database.client.collection(collections.REQUESTS).insertOne(payload);
};
