const Author = require('../models/author.js')

const getAuthors = ((req, res) => { // 
    res.send("All authors");
})

const getAuthor = ((req, res) => { 
    res.send("one Author");
})

const createAuthor = ((req, res) => { post /
    res.send("create Author");
})

const updateAuthor = ((req, res) => {
    res.send("update Author");
})
const deleteAuthor = ((req, res) => {
    res.send("delete book");
})
module.exports = {
    getAuthors,
    getAuthor,
    createAuthor,
    updateAuthor,
    deleteAuthor
}