var dotenv = require('dotenv');
dotenv.config()
const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const PaytmCheckSum =require('./PaytmChecksum')
mongoose.set("strictQuery", false);
const routes=require('./Route/route');
const app = express();
// CORS
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
})
app.use(express.json())
app.use('/',routes)

mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(client =>{
    app.listen(process.env.PORT,'localhost',()=>{
        console.log(`server running on http://localhost:${process.env.PORT}`);
    });
}).catch(err =>{
    console.log(err);
});