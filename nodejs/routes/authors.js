const express = require('express');
const Route = express.Router();
const multer = require("multer");
const uploadFile = require('../middleware/uploadFile')

const  { 
    getAuthors,
    getAuthor,
    createAuthor,
    updateAuthor,
    deleteAuthor
} = require('../controllers/authorsController.js')
Route.get('/',getAuthors);

Route.get('/:id',getAuthor);

Route.post('/', uploadFile().single('file') ,createAuthor);

Route.put('/:id',updateAuthor);

Route.delete('/:id',deleteAuthor);

module.exports = Route;