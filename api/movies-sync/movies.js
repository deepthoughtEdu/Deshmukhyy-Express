const database = require('../../database');
const {collections} = require('../../database');
const utilities = require('../../utilities');

const movieApi = module.exports;

movieApi.create = async (request) => {

        const { userId } = req.user;
        const {releaseYear, movieName, rating, showTime, fare} = request.body;
        const timestamp = utilities.getISOTimestamp();
    
        const movie = {};
    
        movie.uid = userId;
        movie.movieName = movieName;
        movie.rating = rating;
        movie.showTime = showTime;
        movie.releaseYear = releaseYear;
        movie.fare = fare;
        movie.createdAt = timestamp; 
        movie.updatedAt = timestamp;
    
        return await database.client.collection(collections.MOVIES).insertOne(movie);
    }