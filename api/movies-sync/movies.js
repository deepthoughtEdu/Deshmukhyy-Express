const database = require('../../database');
const {collections} = require('../../database');
const utilities = require('../../utilities');

const movieApi = module.exports;

movieApi.create = async (request) => {
    const {user} = request;
    const {releaseYear, title, genre, rating, director} = request.body;

    const timestamp = utilities.getISOTimestamp();
    const movie = {};

    movie.uid = user.userId;
    movie.title = title;
    movie.genre = genre;
    movie.rating = rating;
    movie.director = director;
    movie.releaseYear = releaseYear;
    movie.createdAt = timestamp;
    movie.updatedAt = timestamp;

    return await database.client.collection(collections.MOVIES).insertOne(movie);
}