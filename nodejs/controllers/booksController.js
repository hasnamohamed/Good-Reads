const Book = require('../models/book.js')
const getBooks  = (async(req, res) => {
    try {
        let limit = 6;
        const pageNumber = parseInt(req.query.pageNumber) || 1;

        const totalRecords = await Book.countDocuments();
        const totalPages =Math.ceil(totalRecords/limit)

        let startIndex = (pageNumber - 1) * limit ;
        let endIndex = pageNumber * limit;
        const books = await Book.find(null,null,{ skip: startIndex, limit: endIndex });
        res.status(200).json({books,totalPages});
    } catch (err) {
        res.send("something went wrong" + err);
    }
})

const getBook = (async (req, res) => {
    try {
        const bookID = req.params.id
        const book = await Book.findOne({
            _id: bookID
        });
        if (!book) {
            return res.status(400).json({
                message: 'Book not found'
            })
        }
        res.status(200).json(book)
    } catch (err) {
        res.status(400).send('something went wrong : ' + err)
    }
})

const createBook = (async function (req, res) {
    try {
        if (!req.body.title || !req.body.image || !req.body.description || !req.body.authorId || !req.body.catId) {
            return res.status(400).json({
                message: 'Missing required fields'
            });
        }
        let bookInfo = {
            ...req.body
        };
        await Book.create(bookInfo);
        res.status(200).send("Book saved successfully")
    } catch (err) {
        if (err.name === "ParallelSaveError") {
            res.status(400).send("Parallel Save Error" + err);
        } else {
            res.status(400).send("Something went wrong" + err);
        }
    }
})

const updateBook = (async (req, res) => {
    try {
        const bookId = req.params.id;
        if (!req.body.title || !req.body.image || !req.body.description || !req.body.authorId || !req.body.catId) {
            return res.status(400).json({
                message: 'Missing required fields'
            });
        }
        const bookInfo = req.body;

        const updatedBook = await Book.findByIdAndUpdate(
            bookId, {
                ...bookInfo
            }, {
                new: true
            }
        );
        if (!updatedBook) {
            return res.status(404).json({
                message: 'Book not found'
            });
        }
        return res.status(200).json("Book updated");
    } catch (err) {
        res.status(400).send(err);
    }

})
const deleteBook = (async (req, res) => {
    try {
        const bookId = req.params.id
        const result = await Book.deleteOne({
            _id: bookId
        })
        if (result.Count === 0) {
            return res.status(400).json({
                message: 'Book not found'
            })
        }
        res.status(200).json(result)
    } catch (err) {
        res.status(200).send(err);
    }

})
module.exports = {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
}