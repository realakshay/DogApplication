const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

//import local files
const dogRoute = require("./routes/Dogs")

//config the environment file for security purpose
require("dotenv/config")

//create express app
const app = express();

//handling json data i.e. req, res header 
app.use(bodyParser.json())

//define route paths
app.use("/dogs", dogRoute)

//Database connection
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true}, ()=>{
    console.log("Yeah Connected and its working");
})

//run application on this port i.e. 3001
app.listen(3001)