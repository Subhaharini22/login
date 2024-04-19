const express=require("express");
const path=require( "path" );
const bcrypt=require("bcrypt");
const collection=require("./config");
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
//use ejs as use engine
app.set('view engine','ejs');
app.use(express.static("public"));
app.get("/",(req,res)=>{
    res.render("login");
})
app.get("/signup",(req,res)=>{
    res.render("signup");
})
app.post("/signup", async(req,res)=>{
    const data={
        name : req.body.username,
        password:req.body.password
    }
    const userdata= await collection.insertMany(data);
    console.log(userdata);
})


// MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/login';

// Connect to MongoDB
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const port=5500;
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})