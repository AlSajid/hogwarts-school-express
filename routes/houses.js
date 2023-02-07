import express from 'express';
import database from '../db/mongodb.js'
var router = express.Router();

//collections
const housesCollection = database.collection("houses");



try {
    router.get('/', async function (request, response, next) {
        const result = await housesCollection.find({}).toArray();
        response.send(result);
    });
}
catch (error) {
    console.error(error);
}

export default router;
