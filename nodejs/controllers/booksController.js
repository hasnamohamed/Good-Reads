const Book = require('../models/book.js')

const getBooks = ((req, res) => {
    Book.find((err, data) => {
        if (!err) {
            res.send(data)
        } else {
            console.log('Failed to retrieve the Course List: ' + err);
        }
    });
})

const getBook = ((req, res) => {
    res.send("one book");
})

const createBook = (async function (req, res) {
    try {
        let alldata = new Book();
        alldata.title = req.body.title,
            alldata.image = req.body.image,
            alldata.description = req.body.description,
            alldata.authorId = req.body.authorId,
            alldata.catId = req.body.catId,
            alldata.reviews = req.body.reviews,
            await alldata.save()
        res.send("Book saved successfully")
    } catch (err) {
        if (err.name === "ParallelSaveError") {
            console.log("There was a parallel save error for", keyA, keyB);
        }
    }
})

const updateBook = ((req, res) => {
    res.send("update book");
})
const deleteBook = ((req, res) => {
    res.send("delete book");
})
module.exports = {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
}