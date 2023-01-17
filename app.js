//basic
const express = require("express");
const router = require("./src/router/api");
const app = new express();
const bodyParser = require("body-parser");
const mongoose =require("mongoose")


//security middlewear

const rateLimit = require("express-rate-limit");
//const bodyparser = require("body-parser");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xssClean=require('xss-clean');
const hpp = require("hpp");
const cors = require("cors");

//security middlewear implement

app.use(helmet())
app.use(mongoSanitize())
app.use(xssClean())
app.use(hpp())
app.use(cors())

//body parser implement
app.use(bodyParser.json())


//request rate limit
const limiter = rateLimit({windowMs:24*60*1000,max:3000});

app.use(limiter);


//mongodb data base connection
mongoose.set('strictQuery', true)
let OPTION = {user:"",pass:"",autoIndex:true}
mongoose.connect(process.env.URI,OPTION,(error)=>{
    if(error)
        console.log(error)
    else
        console.log("server run success");

});
//  rout implement
app.use("/api/v1",router);

//undefine route implement
app.use("*",(req,res)=>{
    res.status(404).json({status:"fail",data:"not found"});
})


module.exports = app;