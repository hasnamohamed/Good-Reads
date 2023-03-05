const express = require('express');
const Route = express.Router();


Route.post('/admin', (req, res) => {

    res.send("Admin route works")

});

Route.post('/login', (req, res) => {

    res.send("login works")

});


Route.post('/register', (req, res) => {

    res.send("register works")

});




module.exports = Route;