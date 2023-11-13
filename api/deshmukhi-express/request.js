const database = require("../../database");
const { collections } = require("../../database");
const { ObjectId } = require("mongodb");
const utilities = require("../../utilities")

const request = module.exports;

request.create = async (req) => {
    /** Extracting the logged-in user information from the incoming request */
    
    const { userId } = req.user;

    /** Extracting the variable's data from the incoming request body */

    const { category, requirement, time, fare } = req.body;

    /** Creating a payload object to be inserted into the database */

    const payload = {
        uid: userId, // Assigning the user ID to the payload
        createdAt: new Date().toISOString(), // Assigning the current timestamp to the payload
        status: 'approved', // Setting the initial status of the request to 'approved'
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