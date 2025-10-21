import express from 'express'
import {MongoClient, ObjectId} from 'mongodb'

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
    app.delete('/delete/:id',async (req,resp)=>{
        console.log(req.params.id)
        const collection = db.collection("students"); 
        let result = await collection.deleteOne({_id: new ObjectId(req.params.id)});
        if(result){
            resp.send({
                message:"Student Data deleted",
                sucess: true
            })
        }
        else{
            resp.send({
                message:"Student Data Not deleted",
                sucess: false
            })
        }
    })
    app.delete('/update/:id',async (req,resp)=>{
        console.log(req.params.id)
        const collection = db.collection("students"); 
        let result = await collection.findOne({_id: new ObjectId(req.params.id)});
        if(result){
            resp.send({
                message:"Student Data Fetched",
                sucess: true,
                result:result
            })
        }
        else{
            resp.send({
                message:"Student Data Not deleted",
                sucess: false
            })
        }
    })

    app.get('/ui/delete/:id',async (req,resp)=>{
        console.log(req.params.id)
        const collection = db.collection("students"); 
        let result = await collection.deleteOne({_id: new ObjectId(req.params.id)});
        if(result){
            resp.send("Student Record Deleted");
        }
        else{
            resp.send("Student Record Not Deleted");
        }
    })
    app.get('/ui/update/:id',async (req,resp)=>{
        console.log(req.params.id)
        const collection = db.collection("students"); 
        let result = await collection.findOne({_id: new ObjectId(req.params.id)});
        resp.render('update',{result});
    })
})



app.listen(4800)
