const mongoose=require('mongoose');

const internSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required for the internship'],
    },
    domain:{
        type:String,
        required:[true,'Please enter a domain you want to do internship']
    }
});

const internModel=new mongoose.Model('intern',internSchema);