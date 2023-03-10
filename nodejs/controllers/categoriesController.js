const Category = require('../models/category.js')

const getCategories = (async function (req, res) {

})

const getCategory = (async function (req, res) {

})

const createCategory = (async function (req, res) {
    try {
        let alldata = new Category();
        alldata.name = req.body.name;
        await alldata.save()
        res.send("Category saved successfully")
    } catch (err) {
        if (err.name === "ParallelSaveError") {
            console.log("There was a parallel save error for", keyA, keyB);
        }
    }

})

const updateCategory = (async (req, res) => {

})
const deleteCategory = (async (req, res) => {

})
module.exports = {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
}