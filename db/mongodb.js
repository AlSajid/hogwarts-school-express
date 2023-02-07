import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config()

const uri = `mongodb+srv://AlSajid:${process.env.DB_PASS}@myfirstcluster.duw99.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);
const database = client.db("hogwarts-school")


export default database;
