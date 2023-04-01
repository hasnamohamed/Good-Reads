const express = require('express');
const Route = express.Router();
const Auth = require('../middleware/auth')
const uploadFile = require('../middleware/uploadFile')

const  { 
    popular_books,
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook,
    getBooksByAuthorId
} = require('../controllers/booksController.js')

Route.get('/',getBooks);

Route.get('/popular',popular_books)
Route.get('/author/:id',getBooksByAuthorId)

Route.get('/:id',getBook);

Route.post('/',uploadFile().single('file'), createBook);

Route.put('/:id', uploadFile().single('file'),updateBook);

Route.delete('/:id',deleteBook);





module.exports = Route;