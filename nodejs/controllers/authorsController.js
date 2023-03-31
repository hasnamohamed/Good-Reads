const Author = require('../models/author.js')
const Book = require('../models/book.js');
// 1-get all authors from database
const getAuthors = (async(req, res) => {
    try {
        const pageSize = parseInt(req.query.pageSize) || 8;
        const pageNumber = parseInt(req.query.pageNumber) || 1;

        const totalRecords = await Author.countDocuments();

        const totalPages =Math.ceil(totalRecords/pageSize)

        const authors = await Author.find({})
        .skip((pageNumber-1)*pageSize)
        .limit(pageSize);

        res.status(200).json({authors,totalPages})
    } catch (error) {
        res.status(400).json(error.message);
    }
})

// 2-get one author from database by id
const getAuthor = (async(req, res) => {
    try {
        
        const authorID = req.params.id
        const author = await Author.findOne({_id:authorID});
        const books = await Book.find({ authorId: authorID });

        if(!author){
            return res.status(404).json({message:'Author not found'})
        }
            res.json({author,books})
    } catch (error) {
        res.status(400).json(error.message);
    }
})

//3-insert new author
const createAuthor = (async(req, res) => {
    try 
    {
        const {name, bio, birthDate} = {...req.body}
        let authorImage;

        if (!name || !birthDate || !bio)
            return res.status(400).json({ message: 'Missing required fields' });
        
        
        if(req.file != undefined)
        {
            authorImage =  `images/${req.file.filename}`
        }
        else
        {
            authorImage = `images/author-defualt-profile.jpeg`
        }

        const newAuthor = {
            name:name,
            bio:bio,
            birthDate:birthDate,
            authorImage: authorImage
        }
        let addAuthor = await Author.create(newAuthor)
        res.status(200).send(addAuthor);
    } catch (error) {
        res.status(502).json(error.message);
    }
})


// 4-update one author
const updateAuthor = (async(req, res) => {
    try {
        const authorId = req.params.id;
        const { name, birthDate, bio } = {...req.body};
        let authorImage;

        if (Object.keys(req.body).length == 0) {
          return res.status(400).json({ message: 'At least one filed must be provided' });
        }

        if(req.file != undefined)
        {
            authorImage =  `images/${req.file.filename}`
        }
       
        const updatedAuthor = await Author.findByIdAndUpdate(
          authorId,
          { name, birthDate, bio, authorImage },
          { new: true }
        );

    
        if (!updatedAuthor) {
          return res.status(404).json({ message: 'Author not found' });
        }
    
        return res.status(200).send(updatedAuthor);
      } catch (error) {
        res.status(400).json(error.message);
      }
})

// 5-delete one author
const deleteAuthor = (async(req, res) => {
   try {
    const authorID = req.params.id
    const result = await Author.deleteOne({ _id: authorID });
    if (result.deletedCount === 0) {
        return res.status(404).json({ error: 'Author not found' });
      }

      res.status(200).json({ message: 'Author deleted successfully' });

   } catch (error) {
    res.status(400).json(error.message);
   }
})
module.exports = {
    getAuthors,
    getAuthor,
    createAuthor,
    updateAuthor,
    deleteAuthor
}