import express, { urlencoded } from "express"
import userData from './users.json' with {type:'json'}
const app=express();
app.get("/",(req,resp)=>{
    console.log(userData)
    resp.send(userData);
})
app.get("/user/:id",(req,resp)=>{
    console.log(req.params.id);
    const id =req.params.id;

    let filterData = userData.filter((user)=>user.id==id)
    resp.send(filterData);
})
app.get("/userage/:age",(req,resp)=>{
    console.log(req.params.age);
    const age =req.params.age;

    let filterData = userData.filter((user)=>user.age.toLowerCase()==age.toLowerCase())
    resp.send(filterData);
})
app.get("/username/:name",(req,resp)=>{
    console.log(req.params.name);
    const name =req.params.name;

    let filterData = userData.filter((user)=>user.name.toLowerCase()==name.toLowerCase())
    resp.send(filterData);
})

app.listen(4800)
