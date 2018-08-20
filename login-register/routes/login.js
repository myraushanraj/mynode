const connect = require("../db");
const express = require("express");
const router = express.Router();



const today=new Date();
router.post('/',function(req,res){
   
   console.log("login");
    
   
    var userData={
       "email":req.body.email,
        "password":req.body.password
    }
    console.log(userData);
    connect.connection.query(`SELECT * FROM users WHERE email='${req.body.email}' AND  password='${req.body.password}'`,function(err,result){
        if(!err){
            //res.send(result);
            req.session.token=req.body.email;
            res.send(req.session.token);
        }
        else{
            console.log(err);
        }
    });
});
module.exports=router;