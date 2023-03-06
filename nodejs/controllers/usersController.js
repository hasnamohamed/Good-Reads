const User = require('../models/user.js')

const login = ((req, res) => {
    res.send("login");
})

const register = ((req, res) => {
    let userInfo = {
        ...req.body
    }
    try {
        let newUser = new userModel(userInfo)
        newUser.save()
        res.status(200).send("User has been Added")
    } catch (err) {
        res.status(502).send(err);
    }

})



module.exports = {
    login,
    register
}