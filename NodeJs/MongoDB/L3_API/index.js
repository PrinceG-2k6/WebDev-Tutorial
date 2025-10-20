import express from 'express'
import {MongoClient} from 'mongodb'

const app = express();
app.set("view engine","ejs")

const dbname ="school";
const url = "mongodb://localhost:27017"
const client = new MongoClient(url);

client.connect().then((connection)=>{
    const db =connection.db(dbname);

    app.get('/api',async (req,resp)=>{
        const collection = db.collection("students"); 
        let students = await collection.find().toArray();
        resp.send(students)
    })

    app.get('/ui',async (req,resp)=>{
        const collection = db.collection("students"); 
        let students = await collection.find().toArray();
        resp.render('students',{students})
    })
})



app.listen(4800)
