const mongoose = require('mongoos')
const categories = new mongoose.Schema(
    {
        _id:Number,
        name:String,
       // author:{type:mongoose.Schema.Types.ObjectId, ref: "users"}
    }
)

const Category = mongoose.model('categories', categories)

module.exports = Category