import mongoose from "mongoose";

import express from 'express';
import studentModel from "./model/studentModel.js";
const app =express();

await mongoose.connect("mongodb://localhost:27017/school").then(()=>{
    console.log("___________CONNECTED__________")
})

app.get("/",async (req,resp)=>{
    const studentData = await studentModel.find();
    resp.send({studentData});
})

app.listen(3200)

// async function dbConnection() {
//     await mongoose.connect("mongodb://localhost:27017/school");
//     const schema = mongoose.Schema({
//         name:String,
//         email:String,
//         age:Number,
//     })
//     const studentModel = mongoose.model('students',schema);
//     const result = await studentModel.find();
//     console.log(result);
// }

// dbConnection();