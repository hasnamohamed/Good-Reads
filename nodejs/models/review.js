const mongoose = require('mongoose')
const reviews = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book"
    },
    review: String,
    rating: Number,
})

const Review = mongoose.model('reviews', reviews)

module.exports = Review