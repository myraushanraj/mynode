var express = require('express');
var path = require("path");
var hbs = require("express-handlebars");

var app = express();
var session = require('express-session');

var bodyParser = require('body-parser');

app.set("views",path.join(__dirname,'views'));
app.engine('handlebars',hbs({defaultLayout:'main'}));
app.set('view engine','handlebars');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());
app.use(session({ secret: 'keyboard cat',resave:false,saveUninitialized:false,cookie: { maxAge: 60000 }}));
const register= require("./routes/register");
const login= require("./routes/login");
//routing
app.use('/register',register);
app.use('/login',login);


app.get("/",function(req,res){
    
    // console.log("index page");
    // res.sendFile(__dirname+"/view/index.html");
    res.render('home',{content:"Hello there"});
});
app.get("/about",function(req,res){
    
    // console.log("index page");
    // res.sendFile(__dirname+"/view/index.html");
    res.render('about',{content:"Hello in about page",
works:[{name:"Ankit",id:"1"},{name:"Pur",id:"2"},{name:"Nur",id:"3"},{name:"Sur",id:"4"}]});
})
app.get("/user-login",function(req,res){
    console.log("index page");
    res.sendFile(__dirname+"/view/login.html");
})


app.listen(3000,()=>{
    console.log("Server up and running");
})
