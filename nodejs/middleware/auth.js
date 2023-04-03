const jwt = require("jsonwebtoken");
const User = require('../models/user.js')

async function verifyToken (req, res, next) 
{
    
    const token =
        req.body.token || req.query.token || req.headers["x-access-token"];

    console.log(token)
    if (!token)
    {
       return res.status(403).send("A token is required for authentication")
    }

    try 
    {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);        
        req.body.email = decoded.email
    }
    catch (err) 
    {
        await User.updateOne({email:req.body.email}, {isLogedIn:false})
        return res.status(401).send("Invalid or expired Token");
    }

    const user = await User.findOne({email:req.body.email})

    if(user && user.isLogedIn == false)
    {
        return res.status(403).send("Access Denied");
    }

    return next();
  
};

async function verifyAdmin (req, res, next) 
{
    const user = await User.findOne({email:req.body.email})
    if(user && user.isLogedIn == false && user.isAdmin)
    {
        res.status(200).send("You can go");
    }
    else
    {
        return res.status(403).send("Unauthorized Action, real admins has been reported"); 
    }

    return next();
  
};


module.exports = {
    verifyToken,
    verifyAdmin
}

