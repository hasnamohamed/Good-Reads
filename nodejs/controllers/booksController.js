const Book = require('../models/book.js')
const getBooks  = (async(req, res) => {
    try {
        let limit = 8;
        const pageNumber = parseInt(req.query.pageNumber) || 1;

        const totalRecords = await Book.countDocuments();
        const totalPages =Math.ceil(totalRecords/limit)

        let startIndex = (pageNumber - 1) * limit ;
        let endIndex = pageNumber * limit;
        const books = await Book.find(null,null,{ skip: startIndex, limit: endIndex, populate: 'cateId authorId' });

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

        let popluatedBook =  await book.populate('cateId authorId')

        res.status(200).json(popluatedBook)
    } catch (err) {
        res.status(400).send('something went wrong : ' + err)
    }
})

const createBook = (async function (req, res) {
    try {

        const {title, description, authorId, cateId} = {...req.body}
        let bookCover;

        if (!title || !description || !authorId || !cateId) {
            return res.status(400).json({
                message: 'Missing required fields'
            });
        }


        if(req.file != undefined)
        {
            bookCover =  `images/${req.file.filename}`
        }
        else
        {
            bookCover = `images/no-cover.png`
        }

        let bookInfo = {
            title:title,
            description:description,
            authorId:authorId,
            cateId:cateId,
            image:bookCover
        };
        let newBook = await Book.create(bookInfo);
        let popluatedBook =  await newBook.populate('cateId authorId')


        res.status(200).send(popluatedBook)
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

        if (Object.keys(req.body).length == 0) {
            return res.status(400).json({ message: 'At least one filed must be provided' });
          }
        

          const bookId = req.params.id;
          let image;

          let bookInfo = {
            ...req.body
          }

          if(req.file != undefined)
          {
            image =  `images/${req.file.filename}`
            bookInfo.image = image
          }

          console.log(bookInfo)


        const updatedBook = await Book.findByIdAndUpdate(
            bookId, {...bookInfo} , {
                new: true
            }
        );

        if (!updatedBook) {
            return res.status(404).json({
                message: 'Book not found'
            });
        }

        let popluatedBook =  await updatedBook.populate('cateId authorId')

        res.status(200).send(popluatedBook)

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