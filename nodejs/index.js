const express = require('express');
const app = express();
const mongoDB = require('./config/db')

app.use(express.json())

const userRoutes = require('./routes/users-auth.js')
const booksRoutes = require('./routes/books.js')
const categoryRoutes = require('./routes/categories.js')
const authorsRoutes = require('./routes/authors.js')

app.use('/', userRoutes)
app.use('/book', booksRoutes)
app.use('/category', categoryRoutes)
app.use('/author', authorsRoutes)

app.listen(9000)