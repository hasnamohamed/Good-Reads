const mongoose = require('mongoose')
const authors = new mongoose.Schema(
    {
        _id:Number,
        name:String,
        birth:Date, //validate form date #REMEmBER
        background:String,
       // author:{type:mongoose.Schema.Types.ObjectId, ref: "users"}
    }
)

const Author = mongoose.model('authors', authors)

module.exports = Author