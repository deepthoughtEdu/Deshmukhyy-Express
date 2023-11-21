const database = require("../../database");
const { collections } = require("../../database");
const { ObjectId } = require("mongodb");
const utilities = require("../../utilities")

const statusApi = module.exports;
const validStatus = ['approved', 'pending', 'cancelled'];

statusApi.update = async (req) => {
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

    if (!validStatus.includes(status)) {
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