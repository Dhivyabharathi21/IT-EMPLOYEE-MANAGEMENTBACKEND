var express=require("express");
var app=express()

var db=require('./dbconnection')
const bodyParser =require('body-parser')
app.use(bodyParser.json())

const cors=require("cors")
app.use(cors())


const router = require("./Route/route")
app.use('/',router)



app.listen(4001,function(){console.log("connected");})