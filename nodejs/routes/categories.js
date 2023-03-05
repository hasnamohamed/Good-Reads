const express = require('express');
const Route = express.Router();

Route.get('/', (req, res) => {

    res.send("Get all Cat")

});

Route.get('/:id', (req, res) => {

    res.send("Get one Cat")

});

Route.post('/', (req, res) => {

    res.send("Adding Cat")

});

Route.put('/', (req, res) => {

    res.send("edit Cat")

});


Route.delete('/:id', (req, res) => {

    res.send("remove Cat")

});




module.exports = Route;