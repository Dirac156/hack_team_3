import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.js";
 
dotenv.config()

const app=express();
 
 
app.use(router);
const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`Our Social media is working on port ${PORT}`)
})