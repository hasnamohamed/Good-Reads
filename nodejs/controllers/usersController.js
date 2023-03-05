const User = require('../models/user.js')

const login = ((req, res) => {
    res.send("login");
})

const register = ((req, res) => {
    res.send("register/Create user");
})


 
module.exports = {
    login,
    register
}