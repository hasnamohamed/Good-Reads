const express = require('express');
const Route = express.Router();
const  { 
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
} = require('../controllers/booksController.js')

Route.get('/',getBooks);

Route.get('/:id',getBook);

Route.post('/',createBook);

Route.put('/:id',updateBook);

Route.delete('/:id',deleteBook);




module.exports = Route;