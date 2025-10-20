import express from 'express'
import {MongoClient} from 'mongodb'

const app = express();
app.set("view engine","ejs")

const dbname ="school";
const url = "mongodb://localhost:27017"
const client = new MongoClient(url);


app.get("/",async(_,resp)=>{
    
        await client.connect();
        const db = client.db(dbname);
        const collection = db.collection("students"); 
        let students = await collection.find().toArray();
        console.log(students);
    

    resp.render('students',{students});
})
app.listen(4800)
