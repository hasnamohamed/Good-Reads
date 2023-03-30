const Category = require('../models/category.js')
const Book = require('../models/book.js')

const getCategories = (async function (req, res) {
    try {
        
        // remove Anonymous Author from the resualt so Adimns cannot remove it

        const Cats = await Category.find({"_id":{$ne:"64255372e01179a4a3fabfe9"}})
        res.json(Cats)
    } catch (error) {
        res.status(400).json(error.message);
    }
})

const getCategory = (async function (req, res) {
    try {
        const catId = req.params.id;
        const cat = await Category.findOne({ _id: catId })
        if (!cat) {
            res.status(400).json({ message: 'Category not found' })
        }
        else {
            res.status(200).send(cat);
        }
    } catch (err) {
        res.status(400);
        res.send(err);
    }
})

const createCategory = (async function (req, res) {
    try {
        const {name} = {...req.body};
        let addedCat = await Category.create({name})
        res.status(200).json(addedCat)
    } catch (err) {
        if (err.name === "ParallelSaveError") {
            console.log("There was a parallel save error for", keyA, keyB);
        }
    }

})

const updateCategory = (async (req, res) => {
  try{
    const cat = await Category.findOne({_id:req.params.id});
    cat.name = req.body.name;
    await cat.save();
    res.status(200).send("Category Name Updated Successfully")
  }catch(err){
    res.status(400).send(err.message);
  }
})
const deleteCategory = (async (req, res) => {
    try{
        const cateId = req.params.id;
        const count = await Category.deleteOne({_id:cateId});
        if(count === 0){
           return res.status(400).send("Category Not Found")
        }
        

        // look up for books written by this author and replaced with anoyminus author
        const updateBooksWithoutCategory = await Book.updateMany({"cateId":cateId} , {"$set":{"cateId":"64255372e01179a4a3fabfe9"}})
        console.log(cateId)
        console.log(updateBooksWithoutCategory)
        res.status(200).send("Category Deleted Successfully")
    

    }catch(err){
        res.status(400).send(err.message);
    }
})
module.exports = {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
}