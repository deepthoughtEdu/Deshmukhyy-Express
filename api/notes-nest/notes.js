const { ObjectId } = require('mongodb');
const database = require('../../database');
const {collections} = require('../../database');
const utilities = require('../../utilities');

const validNoteStatuses = ['published', 'draft', 'inactive'];
const defaultNoteStatus = 'draft';

const noteApi = module.exports;

noteApi.create = async (request) => {
    const {user} = request;
    const {content, title, subject, status} = request.body;

    const timestamp = utilities.getISOTimestamp();
    const note = {};

    if (status) {
        if (!validNoteStatuses.includes(status)) {
            throw new Error('Invalid status: ' + status);
        }
    }

    note.uid = user.userId;
    note.title = title;
    note.content = content;
    note.subject = subject;
    note.status = status || defaultNoteStatus;
    note.createdAt = timestamp;
    note.updatedAt = timestamp;

    return await database.client.collection(collections.NOTES).insertOne(note);
}

noteApi.get = async (request) => {
    const { userId } = request.user;

    const limit = parseInt(request.query.limit) || 5;
    const page = parseInt(request.query.page) || 0;

    const offset = page*limit;
    const key = { uid: userId };

    const [notes, count] = await Promise.all([
        database.client.collection(collections.NOTES).find(key).skip(offset).limit(limit).toArray(),
        database.client.collection(collections.NOTES).countDocuments(key)
    ]);

    return utilities.paginate(`/api/note${request.url}`, notes, count, limit, page);
}

noteApi.update = async (req) => {
    const {id} = req.params;
    const userId = req.user.userId;
    const {status} = req.body;
    const payload = {};

    const note = await database.client.collection(collections.NOTES).findOne({_id: new ObjectId(id)});
    if (!note) {
        throw new Error('Note not found');
    }

    if (note.uid != userId) {
        throw new Error('Not authorized to edit this note');
    }

    ['title', 'content', 'subject'].forEach(elem => {
        if (req.body[elem]) {
            payload[elem] = req.body[elem];;
        }
    });

    if (status) {
        if (!validNoteStatuses.includes(status)) {
            throw new Error('Invalid status: ' + status);
        }
        payload.status = status;
    }

    await database.client.collection(collections.NOTES).findOneAndUpdate({_id: new ObjectId(id)}, {$set: payload});
}