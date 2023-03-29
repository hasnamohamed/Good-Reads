const express = require('express');
const Route = express.Router();
const Auth = require('../middleware/auth')
const uploadFile = require('../middleware/uploadFile')

const  { 
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
} = require('../controllers/booksController.js')

Route.get('/',getBooks);

Route.get('/:id',getBook);

Route.post('/',uploadFile().single('file'), createBook);

Route.put('/:id', uploadFile().single('file'),updateBook);

Route.delete('/:id',deleteBook);




module.exports = Route;