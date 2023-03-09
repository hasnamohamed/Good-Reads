const express = require('express');
const Route = express.Router();
const  { 
    login,
    logout,
    register,
    restPassword
} = require('../controllers/usersController.js')

Route.post('/register',register);
Route.post('/admin',login);
Route.post('/login',login);
Route.post('/logout',logout);
Route.post('/rest',restPassword);

module.exports = Route;