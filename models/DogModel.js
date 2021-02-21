const mongoose = require("mongoose")

const DogSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    variety:{
        type: String,
        required: true
    },
    tags:{
        type: Array,
        default: []
    },
    url:{
        type: String,
        required: true
    },
    postedDate:{
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model("Dog", DogSchema)