import express from "express"
import path from "path"



const app=express()
app.get("/",(req,resp)=>{
    const absPath = path.resolve("./View/home.html")
    resp.sendFile(absPath)
})
app.get("/login",(req,resp)=>{
    const absPath = path.resolve("./View/login.html")
    resp.sendFile(absPath)
})
app.post("/submit",(req,resp)=>{
    const absPath = path.resolve("./View/submit.html")
    resp.sendFile(absPath)
})

app.listen(4800)
