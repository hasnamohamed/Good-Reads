const Category = require('../models/category.js')
const Book = require('../models/book.js')
const getCategories = (async function (req, res) {
    try {
        const pageSize = parseInt(req.query.pageSize) || 8;
        const pageNumber = parseInt(req.query.pageNumber) || 1;

        const totalRecords = await Category.countDocuments();

        const totalPages =Math.ceil(totalRecords/pageSize)
        const Cats = await Category.find({})
        .skip((pageNumber-1)*pageSize)
        .limit(pageSize);

        res.json({Cats,totalPages})
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

const getBooksByCat = (async function (req, res) {
   
    try {
        const Id = req.params.id;
        const limit = 6;
        const pageNumber = parseInt(req.query.pageNumber) || 1;
        let startIndex = (pageNumber - 1) * limit ;
        let endIndex = pageNumber * limit;
        const totalRecords = (await Book.find({catId: Id},null,{ skip: startIndex, limit: endIndex })).length;
        const totalPages =Math.ceil(totalRecords/limit)
        
        const books = await Book.find({catId: Id},null,{ skip: startIndex, limit: endIndex });



        res.send({books,totalPages});
    } catch (err) {
        res.send("something went wrong" + err);
    }
    // try {
    //     const catId = req.params.id;
    //     const cat = await Category.findOne({ _id: catId })
    //     if (!cat) {
    //         res.status(400).json({ message: 'Category not found' })
    //     }
    //     else {
    //         res.status(200).send(cat);
    //     }
    // } catch (err) {
    //     res.status(400);
    //     res.send(err);
    // }
})

const createCategory = (async function (req, res) {
    try {
        let alldata = new Category();
        alldata.name = req.body.name;
        await alldata.save()
        res.status(200).json(alldata)
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
        const count = await Category.deleteOne({_id:req.params.id});
        if(count === 0){
            res.status(400).send("Category Not Found")
        }
        else{
            res.status(200).send("Category Deleted Successfully")
        }

    }catch(err){
        res.status(400).send(err.message);
    }
})
module.exports = {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
    getBooksByCat
}