
const express = require("express");
const mongoose = require("mongoose");
// const User = require("../models/User");
const dotenv = require('dotenv');    
const cors = require("cors");
const app = express()
app.use(express.json())
app.use(cors());
dotenv.config();
// connecting to db
const CONNECTION_URL = process.env.MONGODB_URL;
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true}, ()=> console.log("connected to Database"))

//Routers
const create = require("./route/create.js");
const get = require("./route/get.js");
const update = require("./route/update.js");
const deletes = require("./route/delete.js");


//API
app.use("/create", create)
app.use("/get", get)
app.use("/update", update);
app.use("/delete", deletes);

app.listen(5000, () => console.log("Server Running on port 5000"));
