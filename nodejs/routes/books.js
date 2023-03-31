const express = require('express');
const Route = express.Router();
const Auth = require('../middleware/auth')

const  { 
    popular_books,
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook,
} = require('../controllers/booksController.js')

Route.get('/',getBooks);

Route.get('/popular',popular_books)

Route.get('/:id',getBook);

Route.post('/',createBook);

Route.put('/:id',updateBook);

Route.delete('/:id',deleteBook);





module.exports = Route;