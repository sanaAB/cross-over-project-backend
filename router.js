const express = require("express");
const router = express.Router();
const users = require("./models/useSchema");
const message = require("./models/msgSchema");


router.get("/users",(req,res)=>{
    // users.create({user_name:"test"});
    users.find({}, (err, data) => {
        console.log(data);
        res.send(data);
});
});
router.get("/msgs",(req,res)=>{
    // users.create({user_name:"test"});
    message.find({}, (err, data) => {
        console.log(data);
        res.send(data);
});
});