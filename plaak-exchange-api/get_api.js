const request = require("request");

module.exports.getData = function getData(path,data) {
 
      console.log(data);
      console.log(typeof data);
    
    return new Promise((resolve,reject)=>{
        request({
            method:"GET",
            uri:`http://159.65.151.91:8080/freelance-api${path}`
        },function(err,response,body){
            if(err){
                reject(err);
            }
            else{
                resolve(body);
            }
        
        })




    })




}

