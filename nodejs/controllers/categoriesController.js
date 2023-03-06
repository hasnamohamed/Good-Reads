const Category = require('../models/category.js')

const getCategories = ((req, res) => {
    res.send("All categories");
})

const getCategory = ((req, res) => {
    res.send("one Category");
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