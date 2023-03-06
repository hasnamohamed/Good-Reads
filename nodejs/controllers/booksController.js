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

const createBook = ((req, res) => {
    var myData = new Book(req.body);
  myData.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send(err);
    });
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