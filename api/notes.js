const database = require("../database");
const { collections } = require("../database");

const notes = module.exports;

const collectionName = collections.NOTES;

notes.create = async (req) => {
    const { userId } = req.user;
    const { note, learningStyle } = req.body;

    const payload = {
        uid: userId,
        createdAt: new Date().toISOString(),
        note,
        learningStyle,
    };

    return await database.client.collection(collectionName).insertOne(payload);
};
