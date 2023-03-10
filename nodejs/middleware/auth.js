const jwt = require("jsonwebtoken");
const User = require('../models/user.js')

async function verifyToken (req, res, next) 
{
    const token =
        req.body.token || req.query.token || req.headers["x-access-token"];

    const user = await User.findOne({email:req.body.email})

    if (!token)
    {
       return res.status(403).send("A token is required for authentication")
    }

    if(user && user.isLogedIn == false)
    {
        return res.status(403).send("Access Denied");
    }

    try 
    {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    }
    catch (err) 
    {
        await User.updateOne({email:req.body.email}, {isLogedIn:false})
        return res.status(401).send("Invalid or expired Token");
    }

    return next();
  
};

module.exports = verifyToken;

