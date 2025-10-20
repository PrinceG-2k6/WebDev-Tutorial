import express from 'express'
import {MongoClient} from 'mongodb'

const dbname ="school";
const url = "mongodb://localhost:27017"
const client = new MongoClient(url);

async function dbConnect (){
    try {
        await client.connect();
        const db = client.db(dbname);
        const collection = db.collection("students"); 
        const result = await collection.find().toArray();
        console.log(result);
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
}

dbConnect();

const app = express();
app.listen(4800)
