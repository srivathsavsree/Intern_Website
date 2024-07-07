const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');
const morgan=require('morgan');
const mongoose=require('mongoose');
dotenv.config();
const app=express();


const DB = process.env.DATABASE;
  
  mongoose
    .connect(DB)
    .then(() => {
      console.log("Connected To MongoDB");
    })
    .catch((err) => {
      console.log(err);
    });

app.use(express.json());

app.use(morgan ('dev'));

const port=process.env.PORT||3000;

app.listen(port,()=>{
    console.log("Server is running on port 3000");
})