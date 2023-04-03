const express = require('express');
const Route = express.Router();
const {verifyToken, verifyAdmin} = require('./../middleware/auth')

const  { 
    getCategories,
    getCategory,
    getBooksByCat,
    createCategory,
    updateCategory,
    deleteCategory,
    
} = require('../controllers/categoriesController.js')
Route.get('/',getCategories);

Route.get('/:id',getBooksByCat);

Route.get('/one/:id',getCategory);

Route.post('/',verifyAdmin, createCategory);

Route.put('/:id', verifyAdmin, updateCategory);

Route.delete('/:id', verifyAdmin, deleteCategory);




module.exports = Route;