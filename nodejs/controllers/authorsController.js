const Author = require('../models/author.js')

// 1-get all authors from database
const getAuthors = (async(req, res) => {
    try {
       const authors = await Author.find({})
       res.json(authors)
    } catch (error) {
        console.log(error);
    }
})

// 2-get one author from database by id
const getAuthor = (async(req, res) => {
    try {
        const authorID = req.params.id
        const author = await Author.findOne({_id:authorID});
        if(!author){
            return res.status(400).json({message:'Author not found'})
        }
            res.json(author)
    } catch (error) {
        console.log(error);
    }
})

//3-insert new author
const createAuthor = (async(req, res) => {
    try {
        if (!req.body.name || !req.body.birth || !req.body.background) {
            return res.status(400).json({ message: 'Missing required fields' });
          }
        const newAuthor = {...req.body}
        const createdAuthor = await Author.create(newAuthor)
        res.json(createdAuthor);
    } catch (error) {
        console.log(error);
    }
})


// 4-update one author
const updateAuthor = (async(req, res) => {
    try {
        const authorId = req.params.id;
        const { name, birth, background } = req.body;
    
        if (!name || !birth || !background) {
          return res.status(400).json({ message: 'Missing required fields' });
        }
    
        const updatedAuthor = await Author.findByIdAndUpdate(
          authorId,
          { name, birth, background },
          { new: true }
        );
    
        if (!updatedAuthor) {
          return res.status(404).json({ message: 'Author not found' });
        }
    
        return res.json(updatedAuthor);
      } catch (error) {
        console.error(error);
      }
})

// 5-delete one author
const deleteAuthor = (async(req, res) => {
   try {
    const authorID = req.params.id
    const result = await Author.deleteOne({_id : authorID})

    if(result.deletedCount === 0){
        return res.status(500).json({message:'Author not found'})
    }
    res.json(result)
   } catch (error) {
    console.log(error);
   }
})
module.exports = {
    getAuthors,
    getAuthor,
    createAuthor,
    updateAuthor,
    deleteAuthor
}