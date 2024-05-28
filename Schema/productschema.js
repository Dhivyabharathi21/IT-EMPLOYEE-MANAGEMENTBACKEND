var mongoose= require('mongoose')
var proschema=mongoose.Schema(
 {
    name :String,
    empid :String,
    salary :Number,
    designation:String
   

 })
 module.exports=new mongoose.model("productschema",proschema)