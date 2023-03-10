const dotenv = require("dotenv").config();
const express = require('express');
const db = require('./config/db')
const Auth = require('./middleware/auth')

const app = express();
const config = process.env

app.use(express.json())

const userRoutes = require('./routes/users-auth.js')
const booksRoutes = require('./routes/books.js')
const categoryRoutes = require('./routes/categories.js')
const authorsRoutes = require('./routes/authors.js')

app.use('/', userRoutes)
app.use('/book', booksRoutes)
app.use('/category', categoryRoutes)
app.use('/author', authorsRoutes)
app.get('/users', Auth, (req, res)=>{
    res.send("This is all user")
})

app.listen(config.SERVER_PORT)