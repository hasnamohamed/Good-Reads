const express = require('express');
const Route = express.Router();
const auth = require('./../middleware/auth')
const  { 
    login,
    logout,
    register,
    resetPassword
} = require('../controllers/usersController.js')

Route.post('/register',register);
Route.post('/admin',login);
Route.post('/login',login);
Route.post('/logout', auth, logout);
Route.post('/reset', resetPassword);

module.exports = Route;