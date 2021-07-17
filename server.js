const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
var cors = require("cors");
const app = express();
const users = require("./models/useSchema");
const message = require("./models/msgSchema");

const port = process.env.PORT || 8080;
const db = require("./database");
db.on("error", console.error.bind(console, "MongoDB connection error:"));
const messagesArray = [];

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.get("/users",(req,res)=>{
    users.find({}, (err, data) => {
        res.send(data);
});
});
app.get("/messages",(req,res)=>{
    message.find({}).populate('userId').exec((err, data) => res.send(data));
});
app.get('/messages/:id', (req, res) => {
    message.findOne({_id:req.params.id}).populate('userId').exec((err, data) => res.send(data));
});

app.get('/users/:id', (req, res) => {
    users.findOne({_id:req.params.id}).exec((err, data) => res.send(data));
});

app.listen(port);
console.log("Server started at http://localhost:" + port);