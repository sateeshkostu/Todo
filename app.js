const express = require('express');
const mongoose=require('mongoose')
const bodyparser= require('body-parser')
const signuproutes = require('./routes/signuproutes')
const todosrouter = require('./routes/todorouter')
const Admin = require('./routes/Admin')
const Useradd = require('./routes/Useradd')

 var cors = require('cors');
const app = express();
mongoose.connect('mongodb+srv://employee:employee@cluster0.onigan7.mongodb.net/?retryWrites=true&w=majority')
 app.use((req,res,next) =>{
    res.header('Access-Control-Allow-Origin' , '*');
    res.header('Access-Control-Allow-Header' ,'Origin, X-Requested-With ,Content-Type,Accept,Autherization');
    if(req.method == 'Options'){
        res.header('Access-Control-Allow-Origin' , 'PUT,POST,GET,DELETE,PATCH');
        return res.status(200).json({});
    }
next();
 });
 app.use(cors());
// Routes which should handle requests
app.use(bodyparser.urlencoded({extended: false})); //middleware of parsing bodies from URL
app.use(bodyparser.json());
app.use('/signup', signuproutes);
app.use('/todos', todosrouter);
app.use('/signupAdmin',Admin)
app.use('/adduser',Useradd)


module.exports = app;