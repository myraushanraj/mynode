var express = require('express');
var app = express();
module.exports=app;
const session = require('express-session');
global.__basedir = __dirname;
const bodyParser = require('body-parser');
// require routes
const market = require("./routes/market-data");
const auth = require("./routes/auth");
const item = require("./routes/item");
const kyc = require("./routes/upload-kyc");
//backend domain
module.exports.auth_ip="http://internal-prod-auth-plaak-lb-1926737209.ap-southeast-2.elb.amazonaws.com";
module.exports.exchange_ip="http://internal-prod-backend-plaak-lb-702463521.ap-southeast-2.elb.amazonaws.com";
const buy_sell_ip="10.0.0.103";


// routes will go here
//app.use(multer.)
app.use(bodyParser.json());
app.use(session({ secret: 'keyboard cat',resave:false,saveUninitialized:false,cookie: { maxAge: 60000 }}));
app.use("/market-data",market);
app.use("/auth/",auth);
app.use("/item/",item);
app.use("/kyc/",kyc);


// start the server
app.listen(8080);
console.log('Server started! At http://localhost: 3000');