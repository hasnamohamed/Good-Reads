const mongoose = require('mongoose')
const books = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    rating: {
        totalVotes: Number,
        totalPoints: Number,
        rate: {
            type: Number,
            default: 0
        }
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author",
        required: true
    },
    catId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },

})


const Book = mongoose.model('books', books)

module.exports = Book