const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
var cors = require("cors");
const app = express();
const users = require("./models/useSchema");
const message = require("./models/msgSchema");
// const routes = require("./router");

const port = process.env.PORT || 8080;
const db = require("./database");
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.get("/",(req,res)=>{
    // users.create({user_name:"test"});
    users.find({}, (err, data) => {
        console.log(data);
        res.send(data);
});
});
app.get("/msgs",(req,res)=>{
    // users.create({user_name:"test"});
    message.find({}, (err, data) => {
        console.log(data);
        res.send(data);
});
});

// app.use("/", routes);

app.listen(port);
console.log("Server started at http://localhost:" + port);