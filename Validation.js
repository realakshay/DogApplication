const Joi = require("@hapi/joi")

const insertValidation = data =>{
    
    const schema = {
        name: Joi.string().min(2).required(),
        age: Joi.number().required(),
        variety: Joi.string().min(2).required(),
        tags:  Joi.array().items(Joi.string()),
        url: Joi.string().min(6).required(),
    }
    return Joi.validate(data, schema)
}

module.exports.insertValidation = insertValidation;