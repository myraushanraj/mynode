const express=require("express");
const router=express.Router();
const request = require('request');
const app=require("../app");
const formData = require("form-data");
const multiparty = require("multiparty");
const file=new multiparty.Form();

router.post('/',(req,res)=>{
    console.log("2");
    file.on("part",function(part){
        console.log("1");
        console.log(part.filename);
        var form = new formData();

            form.append("thumbnail", part, {filename: part.filename,contentType: part["content-type"]});

            var r = request.post("http://internal-prod-backend-plaak-lb-702463521.ap-southeast-2.elb.amazonaws.com/user/kyc/doc/17?docName=doc1", { "headers": {"transfer-encoding": "chunked","X-Custom-Token":req.session.token
        } }, function(err, httpres, body){ 
                res.send(httpres);
            });
            
            r._form = form
    })
        file.parse(req);  
   
    // request({
    //     method:"POST",
    //     formData:formData,
    //     uri:"http://internal-prod-backend-plaak-lb-702463521.ap-southeast-2.elb.amazonaws.com/user/kyc/doc/17?docName=doc1",
    //     headers:{"X-Custom-Token":req.session.token},
        
    // },function(err,response,body){
    //     if(err){
    //        console.log(err); 
          
    //     }
    //     else{
    //         //res.send(req.session.token);
    //         console.log(response);
    //         console.log(body);
    //        res.send(body);
    //     }
    
    // })
   
})

module.exports=router;