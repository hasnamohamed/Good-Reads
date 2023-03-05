const express = require('express');
const app = express();
const userRoutes = require('./routes/users.js')
app.use(express.json());
app.use('/', userRoutes)
app.listen(9000)