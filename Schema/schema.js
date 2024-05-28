var mongoose= require('mongoose')
var schema=mongoose.Schema(
 {
    name :String,
    email :String,
    password  :String,
   

 })
 module.exports=new mongoose.model("userschema",schema)