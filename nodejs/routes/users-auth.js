const express = require('express');
const Route = express.Router();
const auth = require('./../middleware/auth')
const uploadFile = require('../middleware/uploadFile')

const  { 
    login,
    logout,
    register,
    resetPassword,
    getUserStatus
} = require('../controllers/usersController.js')

Route.post('/register',uploadFile().single('file') ,register);
// Route.post('/admin',login);
Route.post('/login',login);
Route.post('/logout', auth, logout);
Route.post('/reset', resetPassword);
Route.get('/userStatus',auth, getUserStatus);

module.exports = Route;