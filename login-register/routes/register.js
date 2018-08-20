const connect = require("../db");
const express = require("express");
const router = express.Router();



const today=new Date();
router.post('/',function(req,res){
   
   
    
   
    var userData={
        "first_name":req.body.first_name,
        "last_name":req.body.last_name,
        "email":req.body.email,
        "password":req.body.password,
        "created":today
    }
    
    connect.connection.query('INSERT INTO users SET ?',userData,function(err,rows,fields){
        if(!err){
            res.send("registered Successfully");
            
        }
        else{
            console.log(err);
        }
    });
});


module.exports=router;