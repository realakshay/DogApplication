const express = require("express")

const router = express.Router();
const Dog = require("../models/DogModel")

router.get("/", async (req, res)=>{
    try{
        const dogs = await Dog.find();
        res.status(200).json(dogs)
    }catch(err){
        res.status(400).json({Message: err})
    }
})

router.post("/", async (req,res)=>{
    const dog = new Dog({
        name: req.body.name,
        age: req.body.age,
        variety: req.body.variety,
        tags: req.body.tags,
        url: req.body.url
    })
    try{
        const savePost = await dog.save();
        res.status(200).json(savePost)
    }catch(err){
        res.status(400).json({Message: err})
    }
})

module.exports = router