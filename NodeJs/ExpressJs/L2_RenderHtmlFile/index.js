import express from "express"
import path from "path"
const app=express();
const absPath = path.resolve("./View")
const publicPath = path.resolve('public')

app.use(express.static(publicPath));

app.get("/",(req,resp)=>{
    resp.sendFile(absPath+"/home.html")
})
app.get("/login",(req,resp)=>{
    resp.sendFile(absPath+"/login.html")
})
app.post("/submit",(req,resp)=>{
    resp.sendFile(absPath+"/submit.html")
})
app.use((req,resp)=>{
    resp.status(404).sendFile(absPath+"/page404.html")
})
app.listen(4800)
