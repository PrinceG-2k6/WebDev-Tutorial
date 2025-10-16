import express from "express"
const app=express();
app.set('view engine','ejs')
app.get("/",(req,resp)=>{
    resp.render('home',{name:"Prince Gupta",age:18})
})
app.listen(4800)
