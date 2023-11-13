const database = require('../../database');
const {collections} = require('../../database');
const utilities = require('../../utilities');

const movieApi = module.exports;

//Create API to create a movie show and store details of the show
movieApi.create = async (request) => {

/* 
    Step 1: Getting details about the person making the request.
    Tech World: Extracting the logged-in user information from the incoming request.
*/
    // Write your code here

/* 
   Step 2: Getting information about the movie.
   Tech World: Extracting the variable's data from the incoming request body.
*/
    // Write your code here
    // Variables: releaseYear, movieName, rating, showTime, fare
    
/* 
   Step 3: Making a note of the current time.
   Tech World: Generating a timestamp using utility function for future reference.
*/
    // Write your code here

/* 
   Step 4: Making a record of the movie show.
   Tech World: Creating a payload object to store information for database insertion.
*/
    // Write your code here 
    // Payload variables: uid, movieName, rating, showTime, releaseYear, fare, createdAt, updatedAt.

/* 
   Step 5: Saving the movie details.
   Tech World: Using MongoDB to insert the payload (movie information) into a collection named 'MOVIES.'
   Additional Info 1: 'database.client.collection' refers to a MongoDB collection and 'collections.MOVIES' holds the collection name
   Additional Info 2: The 'insertOne' method is used to add a single document to the MongoDB collection.
*/    

    // Write your code here 
}
