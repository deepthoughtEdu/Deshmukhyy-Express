const database = require("../../database");
const { collections } = require("../../database");
const utilities = require("../../utilities")

const read = module.exports;

const validRequestStatuses = ['completed', 'pending', 'approved'];
const validRoles = ['user', 'delivery-partner'];

read.logic = async (req) => {
    const { userId } = req.user;
    
    const limit = parseInt(req.query.limit) || 5;
    const page = parseInt(req.query.page) || 0;
    const offset = page*limit;

    const startTime = req.query.startTime || 0;
    const endTime = req.query.endTime || 0;
    const { status, role, user, acceptedBy } = req.query;
    const userfields = ['username', 'email'];

    if (role && !validRoles.includes(role)) {
        throw new Error('Invalid role ' + role)
    }

    const key = {}

    status && (key.status = status);

    if (startTime && endTime) {
        key.time = {
            $gte: startTime,
            $lte: endTime,
        }
    }

    if (user) {
        key.uid = String(user).trim();
    } else {
        key.uid = userId;
    }

    if (role == 'delivery-partner') {
        delete key.uid;
    }

    if (acceptedBy) {
        key.acceptedBy = acceptedBy;
    }
    
    const [count, requests] = await Promise.all([
        database.client.collection(collections.REQUESTS).countDocuments(key),
        database.client.collection(collections.REQUESTS).find(key).skip(offset).limit(limit).toArray()
    ]);

    const collection = await Promise.all(requests.map(async item => {
        const {uid, acceptedBy} = item;
        const user = await database.client.collection(collections.USERS).findOne({userId: uid});
        if (acceptedBy) {
            const acceptedByUser = await database.client.collection(collections.USERS).findOne({userId: acceptedBy});
            item.acceptedByUser = utilities.filterObjectByKeys(acceptedByUser, userfields);
        } else {
            item.acceptedByUser = {}
        }
        item.user = utilities.filterObjectByKeys(user, userfields);
        return item;
    }));

    return utilities.paginate(`/api/app${req.url}`, collection, count, limit, page);
};