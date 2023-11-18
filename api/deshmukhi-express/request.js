const database = require("../../database");
const { collections } = require("../../database");
const { ObjectId } = require("mongodb");
const utilities = require("../../utilities")

const request = module.exports;

const validRequestStatuses = ['completed', 'pending', 'approved'];
const validRoles = ['user', 'delivery-partner'];

request.create = async (req) => {
    /** Extracting the logged-in user information from the incoming request */
    
    const { userId } = req.user;

    /** Extracting the variable's data from the incoming request body */

    const { category, requirement, time, fare } = req.body;

    /** Creating a payload object to be inserted into the database */

    const payload = {
        uid: userId, // Assigning the user ID to the payload
        createdAt: new Date().toISOString(), // Assigning the current timestamp to the payload
        status: 'pending', // Setting the initial status of the request to 'pending'
    };

    /** Assigning values from the request body to the payload */

    payload.category = category;
    payload.time = time;
    payload.fare = fare;
    payload.requirement = requirement;

    /**
     * Inserting the payload into the specified database collection
     * Here 'database.client.collection' refers to a MongoDB collection and 'collections.REQUESTS' holds the collection name
     * The 'insertOne' method is used to add a single document to the MongoDB collection
     */
    return await database.client.collection(collections.REQUESTS).insertOne(payload);
};

request.get = async (req) => {
    const { userId } = req.user;

    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const startTime = req.query.startTime || 0;
    const endTime = req.query.endTime || 0;
    const { status, role, user, acceptedBy } = req.query;

    if (!validRoles.includes(role)) {
        throw new Error('Invalid role ' + role)
    }

    const key = {}

    status && (key.status = status);

    if (startTime && endTime) {
        key.time = {
            $gte: startTime,
            $lte: endTime,
        }
    }

    if (user) {
        key.uid = String(user).trim();
    } else {
        key.uid = userId;
    }

    if (role == 'delivery-partner') {
        delete key.uid;
    }

    if (acceptedBy) {
        key.acceptedBy = acceptedBy;
    }

    const offset = (page - 1) * limit;

    const [requests, count] = await Promise.all([
        database.client.collection(collections.REQUESTS)
        .find(key)
        .skip(offset)
        .limit(limit)
        .toArray(),
        database.client.collection(collections.REQUESTS).countDocuments(key)
    ]);

    return utilities.paginate(`/api/request${req.url}`, requests, count, limit, page);
};

request.updateStatus = async (req) => {
    const { userId } = req.user;
    const {status} = req.body;
    const {id} = req.params;

    if (!ObjectId.isValid(id)) {
        throw new Error('Invalid Id');
    }

    const requestData = await database.client.collection(collections.REQUESTS).findOne({_id: new ObjectId(id)});
    if (!requestData) {
        throw new Error('No such request was found.');
    }

    if (!validRequestStatuses.includes(status)) {
        throw new Error('Invalid status supplied');
    }

    if (status != 'approved') return; // As of now, only we can approve. Nothing else

    const payload = {
        status,
        acceptedBy: userId,
        acceptedAt: utilities.getISOTimestamp(),
    };

    await database.client.collection(collections.REQUESTS).updateOne({_id: new ObjectId(id)}, {$set: payload}, {upsert: false});
}

request.rate = async (req) => {
    const { userId } = req.user;
    const {rating} = req.body;
    const {id} = req.params;

    if (!ObjectId.isValid(id)) {
        throw new Error('Invalid Id');
    }

    const requestData = await database.client.collection(collections.REQUESTS).findOne({_id: new ObjectId(id)});
    if (!requestData) {
        throw new Error('No such request was found.');
    }

    const payload = {
        status: 'completed',
        delivered: true,
        deliveredAt: utilities.getISOTimestamp(),
        rating: rating
    };

    await database.client.collection(collections.REQUESTS).updateOne({_id: new ObjectId(id)}, {$set: payload}, {upsert: false});
}