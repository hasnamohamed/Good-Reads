const products = require('../models/book.js')

const getBooks = ((req, res) => {
    res.send("All books");
})

const getBook = ((req, res) => {
    res.send("one book");
})

const createBook = ((req, res) => {
    res.send("create book");
})

const updateBook = ((req, res) => {
    res.send("update book");
})
const deleteBook = ((req, res) => {
    res.send("delete book");
})
module.exports = {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
}