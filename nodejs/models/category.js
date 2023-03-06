const mongoose = require('mongoose')
const categories = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
})

const Category = mongoose.model('categories', categories)

module.exports = Category