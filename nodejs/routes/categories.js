const express = require('express');
const Route = express.Router();
const  { 
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
} = require('../controllers/categoriesController.js')
Route.get('/',getCategories);

Route.get('/:id',getCategory);

Route.post('/', createCategory);

Route.put('/:id',updateCategory);

Route.delete('/:id',deleteCategory);




module.exports = Route;