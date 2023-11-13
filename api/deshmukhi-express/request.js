const database = require("../../database");
const { collections } = require("../../database");
const { ObjectId } = require("mongodb");
const utilities = require("../../utilities")

const request = module.exports;

request.create = async (req) => {
    /* Step-1: 
            Get the user ID from the person who is using the application.
            Tech World: Extracting the logged-in user information from the incoming request */
    const { userId } = req.user;

    /* Step-2:
            Taking details like category, requirement, time, and fare from the user's request
            Coding World: Extracting the variable's data from the incoming request body */
    const { category, requirement, time, fare } = req.body;

    /* Step-3: 
            Making a package with the user's ID, current time, and an initial 'approved' status.
            Coding World: Creating a payload object to store information for database insertion. */
    const payload = {
        uid: userId, // Assigning the user ID to the payload
        createdAt: new Date().toISOString(), // Assigning the current timestamp to the payload
        status: 'approved', // Setting the initial status of the request to 'approved'
    };

    /* Step-4:
            Filling the package with details from the user's request like category, time, fare, and requirement.
            Coding World: Assigning values from the incoming request body to the payload object for database storage. */
    payload.category = category;
    payload.time = time;
    payload.fare = fare;
    payload.requirement = requirement;

    /* Step-5:
            Putting the package into a special storage (database) so that we can remember it later.
            Coding World: Using MongoDB to insert the payload (package of information) into a collection named 'REQUESTS.'
            Additional Info 1: Here 'database.client.collection' refers to a MongoDB collection and 'collections.REQUESTS' holds the collection name
            Additional Info 2: The 'insertOne' method is used to add a single document to the MongoDB collection */
    return await database.client.collection(collections.REQUESTS).insertOne(payload);
};
