import express, { urlencoded } from "express"
import { handleUser } from "./controller/userController.js";
const app=express();
app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs')
app.get("/users",handleUser)
app.listen(4800)
