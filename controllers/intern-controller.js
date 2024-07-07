const mongoose=require('mongoose');
const Intern=require('./models/intern-model.js');


const allinterns=async(req,res)=>{
    const allintern=await Intern.find();
    res.status(200).json({
        allintern
    })
}

const newintern=async(req,res)=>{
    const newinterns=await Intern.create(req.body);
    res.status(201).json({
        newinterns
    })
}

module.exports={allinterns,newintern};