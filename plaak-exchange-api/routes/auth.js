const express=require("express");
const router=express.Router();
const request = require('request');
const app=require("../app");
//init login
router.post('/init-login',(req,res)=>{
   
    console.log(req.body);
    request({
        method:"POST",
        uri:`${app.auth_ip}/auth/verify/password`,
        json:req.body
    },function(err,response,body){
        if(err){
           console.log(err); 
        }
        else{
           res.send(body);
        }
    
    })
   
})
//final login
router.post('/user-login',(req,res)=>{
   
    request({
        method:"POST",
        uri:`${app.auth_ip}/auth/login`,
        json:req.body
    },function(err,response,body){
        if(err){
           console.log(err); 
        }
        else{
          // res.send(body);
           //res.send(body.token.value);
           req.session.token=body.token.value;
           res.send(req.session.token);

        }
    
    })
   
})

module.exports=router;