const express = require('express');
const Route = express.Router();

Route.get('/', (req, res) => {

    res.send("Get all books route works")

});

Route.get('/:id', (req, res) => {

    res.send("Get one book route works")

});

Route.post('/', (req, res) => {

    res.send("Adding books route works")

});

Route.put('/', (req, res) => {

    res.send("edit books works")

});


Route.delete('/:id', (req, res) => {

    res.send("remove books works")

});




module.exports = Route;