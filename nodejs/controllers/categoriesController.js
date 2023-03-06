const Category = require('../models/category.js')

const getCategories = ((req, res) => {
    res.send("All categories");
})

const getCategory = ((req, res) => {
    res.send("one Category");
})

const createCategory = (function(req, res) {
    var myData = new Category(req.body);
    myData.save(); 
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