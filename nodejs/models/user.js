const mongoose = require('mongoose')
const user = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
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

const User = mongoose.model('user', user)

module.exports = User