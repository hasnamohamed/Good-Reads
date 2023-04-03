const express = require('express');
const Route = express.Router();
const uploadFile = require('../middleware/uploadFile')
const {verifyAdmin} = require('./../middleware/auth')

const  { 
    getAuthors,
    getAuthor,
    createAuthor,
    updateAuthor,
    deleteAuthor
} = require('../controllers/authorsController.js')
Route.get('/',getAuthors);

Route.get('/:id',getAuthor);

Route.post('/',verifyAdmin, uploadFile().single('file') ,createAuthor);

Route.put('/:id',verifyAdmin, uploadFile().single('file'),updateAuthor);

Route.delete('/:id',verifyAdmin, deleteAuthor);

module.exports = Route;