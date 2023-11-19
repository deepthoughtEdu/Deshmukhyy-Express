const database = require("../../database");
const { collections } = require("../../database");
const { ObjectId } = require("mongodb");
const utilities = require("../../utilities")

const update = module.exports;
const validStatus = ['_____________', '_____________', '______________']; //interested, waiting, notInterested

update.logic = async (req) => {
    const { userId } = _____________;
    const { status } = _____________;
    const id = req.params.id;

    const searchKeys = { uid:userId };
    const payload = {}
    if (!validStatus.includes(status)) throw new Error("Invalid status supplied!");
    if (!ObjectId.isValid(id)) throw new Error("Invalid request ID!")
    
    searchKeys._id = new ObjectId(id);
    payload.status = _____________;
    payload.updatedAt = utilities.getISOTimestamp();

    await database.client.collection(__________________).findOneAndUpdate(searchKeys, { $set: _____________ });
};