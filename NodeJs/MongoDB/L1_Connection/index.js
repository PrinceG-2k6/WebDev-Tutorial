import express from 'espress'
import {MongoClient} from 'mongodb'

const dbname ="school";
const url = "mongodb://localhost:27017"
const client = new MongoClient(url);

async function dbConnect (){
    await client.connect()
    const db =client.db(dbname);
    const collection= db.collection("students"); 
    const result  =await collection.find().toArray()
    console.log(result);
}

dbConnect();

const app = express();
app.listen(4800)
