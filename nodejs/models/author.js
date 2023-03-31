const mongoose = require('mongoose')
const authors = new mongoose.Schema(
    {
        name:{type:String, required: true},
        birthDate:{type:Date, required: true}, //validate form date #REMEmBER
        bio:{type:String, required: true},
        authorImage:{type:String},
    }
)

const Author = mongoose.model('authors', authors)

module.exports = Author