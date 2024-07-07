const express=require('express');
const {allintern,newinterns}=require('./controllers/intern-controller.js');

const InternRouter=express.Router();

InternRouter.route('/interns').post(newinterns);

module.exports=InternRouter;

