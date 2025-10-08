const express = require("express")

const app=express()
app.get("",(req,resp)=>{
    resp.send("<h1>Basic Node Js Example</h1>")
})
app.get("/about",(req,resp)=>{
    resp.send("<h1>This is About Page</h1>")
})

app.listen(4800)
