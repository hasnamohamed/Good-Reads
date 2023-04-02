const express = require('express');
const Route = express.Router();
const Book = require('../models/book') 

Route.get('/1', async (req, res) => {
    try {
      const popularBooks = await Book.find()
        .sort({ 'rating.rate': -1 }) // sort by popularity rating in descending order
        .limit(10); // get only the top 10 books
  
      res.status(200).json(popularBooks);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });