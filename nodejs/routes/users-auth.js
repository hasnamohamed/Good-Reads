const express = require('express');
const Route = express.Router();
const  { 
    login,
    register
} = require('../controllers/usersController.js')

Route.post('/admin',login);

Route.post('/login',login);

Route.post('/register',register);

module.exports = Route;