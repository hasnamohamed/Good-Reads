const products = require('../models/category.js')

const getCategories = ((req, res) => {
    res.send("All categories");
})

const getCategory = ((req, res) => {
    res.send("one Category");
})

const createCategory = ((req, res) => {
    res.send("create Category");   
})

const updateCategory = ((req, res) => {
    res.send("update Category");
})
const deleteCategory = ((req, res) => {
    res.send("delete Category"); 
})
module.exports = {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
}