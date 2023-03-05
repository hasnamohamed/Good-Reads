const {
    json
} = require('express');
const express = require('express');
const Route = express.Router();

Route.post('/login', (req, res) => {
    const {
        email,
        password
    } = req.body;
    
});
module.exports = Route;