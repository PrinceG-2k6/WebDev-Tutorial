import express from "express"
import path from "path"

const absPath = path.resolve("./View")

const app=express()
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
