import express from 'express';
import database from '../db/mongodb.js'
var router = express.Router();

//collections
const coursesCollection = database.collection("courses");



try {
    router.get('/', async function (request, response, next) {
        const result = await coursesCollection.find({}).toArray();
        response.send(result);
    });
}
catch (error) {
    console.error(error);
}

export default router;
