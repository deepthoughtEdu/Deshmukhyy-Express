const database = require('../../database');
const {collections} = require('../../database');
const utilities = require('../../utilities');

const noteApi = module.exports;

// Create API to create a note and store details of the note
noteApi.create = async (request) => {

/*
    Step-1: Get the user ID from the person who is using the application.
    Tech World: Extracting the logged-in user information from the incoming request.
*/
    const {userId} = ___________;

/* 
   Step 2: Getting information about the note.
   Tech World: Extracting the variable's data from the incoming request body.
*/
    const {content, __________} = _____________;
    // Variables: content, title
    
/* 
   Step 3: Making a note of the current time.
   Tech World: Generating a timestamp using utility function for future reference.
*/
    const timestamp = ________________;

/* 
   Step 4: Making a record of the note.
   Tech World: Creating a payload object to store information for database insertion.
*/
    const note = {};
    note.uid = ___________;  // Assigning the user ID to the payload
    note.title = ____________;
    note.content = content;
    note.__________ = timestamp; // Assigning the current timestamp to the payload
    note.updatedAt = ____________;

/* 
   Step 5: Saving the note details.
   Tech World: Using MongoDB to insert the payload (note information) into a collection named 'NOTES.'
   Additional Info 1: 'database.client.collection' refers to a MongoDB collection and 'collections.NOTES' holds the collection name
   Additional Info 2: The 'insertOne' method is used to add a single document to the MongoDB collection.
*/
    return await database.client.collection(________________).insertOne(_____________);
}
