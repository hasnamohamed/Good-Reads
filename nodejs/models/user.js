const mongoose = require('mongoos')
const users = new mongoose.Schema(
    {
        _id:Number,
        first_name:String,
        last_name:String,
        image:String,
        email:String,
        password:String,
        isAdmin:Boolean,
        books:[{
            bookId: {type: mongoose.Schema.Types.ObjectId,ref: "Book"},
            status:String
        }],
       // author:{type:mongoose.Schema.Types.ObjectId, ref: "users"}
    }
)

const User = mongoose.model('users', users)

module.exports = User