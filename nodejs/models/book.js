const mongoose = require('mongoos')
const books = new mongoose.Schema({
    _id: Number,
    title: String,
    rating: Number,
    image: String,
    description: String,
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    },
    catId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    reviews: [{
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        review: String,
        rating: Number,
    }]
})

const Book = mongoose.model('books', books)

module.exports = Book