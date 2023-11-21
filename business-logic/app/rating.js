const database = require("../../database");
const { collections } = require("../../database");
const { ObjectId } = require("mongodb");
const utilities = require("../../utilities")

const ratingApi = module.exports;

ratingApi.rate = async (req) => {
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