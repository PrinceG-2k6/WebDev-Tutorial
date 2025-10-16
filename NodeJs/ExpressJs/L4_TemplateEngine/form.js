import express, { urlencoded } from "express"
const app=express();
app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs')
app.get("/",(req,resp)=>{
    resp.send('home Page');
})
app.get("/add-user",(req,resp)=>{
    resp.render('addUser');
})
app.post("/submit-user",(req,resp)=>{
    resp.render('submitUser',req.body);
})
app.listen(4800)
