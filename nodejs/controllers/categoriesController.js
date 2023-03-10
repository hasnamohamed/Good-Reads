const Category = require('../models/category.js')

const getCategories = (async function (req, res) {
    Category.find((err, data) => {
        if (!err) {
            res.status(200);
            res.send(data);
        }
        else {
            res.status(400);
            res.send(err.message);
        }
    })
})

const getCategory = (async function (req, res) {
    try {
        const catId = req.params.id;
        const cat = await Category.findOne({ id: catId })
        if (!cat) {
            return
             res.status(400).json({message:'Category not found'})
        }
        else {
            res.status(200);
            res.send(cat)
        }
    } catch (err) {
        res.status(400);
        res.send(err);
    }
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