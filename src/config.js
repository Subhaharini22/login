const mongoose=require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/login");

connect.then(()=>{
    console.log("connected to the database");
})
.catch(()=>{
    console.log("could not connected to the database");
})
const userSchema=new mongoose.Schema({
    name:{type : String , required : true},  // username is a string and it'
    password:{type:String,required:true}   //password is also a string

})

const collection = new mongoose.model("loginpage",userSchema);
module.exports= collection;
