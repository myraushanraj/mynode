const express=require("express");
const router=express.Router();
const request = require('request');
const app=require("../app");

router.get('/',(req,res)=>{
    request({
        method:"GET",
        uri:`${app.exchange_ip}/market/bid/data/all`
    },function(err,response,body){
        if(err){
           console.log(err); 
        }
        else{
           res.send(body);
        }
    
    })
   
})

module.exports=router;