var mysql = require('mysql');
var connection = mysql.createConnection({
    host :"localhost",
    user :"root",
    password :"",
    database : "plaak"
})
//  const connect=connection.connect(function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("connected");
//     }

// });
// console.log(connect);
module.exports.connection=connection;