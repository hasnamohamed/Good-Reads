const Author = require('../models/author.js')

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

        res.json({authors,totalPages})
    } catch (error) {
        res.status(400).json(error.message);
    }
})

// 2-get one author from database by id
const getAuthor = (async(req, res) => {
    try {
        const authorID = req.params.id
        const author = await Author.findOne({_id:authorID});
        if(!author){
            return res.status(404).json({message:'Author not found'})
        }
            res.json(author)
    } catch (error) {
        res.status(400).json(error.message);
    }
})

//3-insert new author
const createAuthor = (async(req, res) => {
    try {
        if (!req.body.name || !req.body.birth || !req.body.bio) {
            return res.status(400).json({ message: 'Missing required fields' });
          }
        const newAuthor = {...req.body}
        await Author.create(newAuthor)
        res.status(200).json({message: 'Author created successfully'});
    } catch (error) {
        res.status(400).json(error.message);
    }
})


// 4-update one author
const updateAuthor = (async(req, res) => {
    try {
        const authorId = req.params.id;
        const { name, birth, bio } = req.body;
    
        if (!name || !birth || !bio) {
          return res.status(400).json({ message: 'Missing required fields' });
        }
    
        const updatedAuthor = await Author.findByIdAndUpdate(
          authorId,
          { name, birth, bio },
          { new: true }
        );
    
        if (!updatedAuthor) {
          return res.status(404).json({ message: 'Author not found' });
        }
    
        return res.status(200).json({message: 'Author updated successfully'});
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