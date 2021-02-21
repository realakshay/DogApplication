const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

require("dotenv/config")

const app = express();
app.use(bodyParser.json())

app.get("/", (req, res)=>{
    res.send("Hey")
})

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true}, ()=>{
    console.log("Yeah Connected");
})

app.listen(3001)