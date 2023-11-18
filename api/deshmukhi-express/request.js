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
    const page = parseInt(req.query.page) || 0;
    const offset = page*limit;
    const key = {uid:userId}

    const count = await database.client.collection(collections.REQUESTS).countDocuments(key);
    const requests = await database.client.collection(collections.REQUESTS).find(key).skip(offset).limit(limit).toArray();

    return utilities.paginate(`/api/request${req.url}`, requests, count, limit, page);
};