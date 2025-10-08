import express from "express"
import home from "./pages/home.js"
import about from "./pages/about.js"

const app=express()
app.get("",(req,resp)=>{
    resp.send("<h1>Basic Node Js Example</h1>")
})
app.get("/about",(req,resp)=>{
    resp.send(about())
})
app.get("/home",(req,resp)=>{
    resp.send(home())
})

app.listen(4800)
