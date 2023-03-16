const express = require('express');
const Route = express.Router();
const Auth = require('../middleware/auth')

const  { 
    getReviews,
    getReview,
    createReview,
    updateReview,
    deleteReview
} = require('../controllers/reviewsController.js')

Route.get('/',getReviews);

Route.get('/:id',getReview);

Route.post('/',createReview);

Route.put('/:id',updateReview);

Route.delete('/:id',deleteReview);




module.exports = Route;