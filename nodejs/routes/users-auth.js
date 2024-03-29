const express = require('express');
const Route = express.Router();
const {verifyToken} = require('./../middleware/auth')
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
Route.post('/logout', verifyToken, logout);
Route.post('/reset', resetPassword);
Route.get('/userStatus',verifyToken, getUserStatus);

module.exports = Route;