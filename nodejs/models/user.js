const mongoose = require('mongoose')
const user = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    gender: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isLogedIn:{
        type:Boolean,
        default:false
    },
    secretQuestion:{
        type: String,
        required: true,
    },
    secretAnswer:{
        type: String,
        required: true,        
    },
    books: [{
        bookId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book"
        },
        status: {
            type: String,
            enum: ["read", "reading", "want to read"]
        }
    }],
})

const User = mongoose.model('User', user)

module.exports = User