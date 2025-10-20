import express from 'express'
import {MongoClient} from 'mongodb'

const app = express();
app.set("view engine","ejs")

const dbname ="school";
const url = "mongodb://localhost:27017"
const client = new MongoClient(url);
app.use(express.urlencoded({extended:true}))
app.use(express.json())

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
    app.get('/add',async (req,resp)=>{
        // const collection = db.collection("students"); 
        // let students = await collection.find().toArray();
        resp.render('form')
    })
    app.post('/addStudent', async(req,resp)=>{
        
        const collection = db.collection("students"); 
        const result = await collection.insertOne(req.body);
        console.log(result)
        resp.render('addStudent')
    })
    
    app.post('/addStudent-api',async(req,resp)=>{
        
        console.log(req.body)
        const {name,age,email} =req.body;
        if(name && age && email){
        const collection = db.collection("students"); 
        const result = await collection.insertOne(req.body);
        resp.send({"message":result})}
        else{
            resp.send({"message":"Operation Failed"})
        }
    })
})



app.listen(4800)
