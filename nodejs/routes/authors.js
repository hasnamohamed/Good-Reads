const express = require('express');
const Route = express.Router();

Route.get('/', (req, res) => {

    res.send("Get all authors")

});

Route.get('/:id', (req, res) => {

    res.send("Get one author")

});

Route.post('/', (req, res) => {

    res.send("Adding author")

});

Route.put('/', (req, res) => {

    res.send("edit author")

});


Route.delete('/:id', (req, res) => {

    res.send("remove author")

});




module.exports = Route;