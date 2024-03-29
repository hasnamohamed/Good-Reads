const dotenv = require("dotenv").config();
const express = require('express');
const cors = require('cors');
const db = require('./config/db')
const Auth = require('./middleware/auth')
const path = require('path')

const app = express();
const config = process.env

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(cors())
app.use(cors({ origin: 'http://localhost:4200'}))
app.use(express.static(path.join(__dirname, '../public')));


const userRoutes = require('./routes/users-auth.js')
const booksRoutes = require('./routes/books.js')
const reviewsRoutes = require('./routes/reviews.js')
const categoryRoutes = require('./routes/categories.js')
const authorsRoutes = require('./routes/authors.js')


app.use('/', userRoutes)
app.use('/book', booksRoutes)
app.use('/review', reviewsRoutes)
app.use('/category', categoryRoutes)
app.use('/author', authorsRoutes)
app.get('/users', (req, res)=>{
    res.send("This is all user")
})

app.listen(config.SERVER_PORT)