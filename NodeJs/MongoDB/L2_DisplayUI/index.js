import express from 'express'
import {MongoClient} from 'mongodb'

const app = express();
app.set("view engine","ejs")

const dbname ="school";
const url = "mongodb://localhost:27017"
const client = new MongoClient(url);


app.get("/",async(_,resp)=>{
    try {
        await client.connect();
        const db = client.db(dbname);
        const collection = db.collection("students"); 
        const result = await collection.find().toArray();
        console.log(result);
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }

    resp.render('students');
})
app.listen(4800)
