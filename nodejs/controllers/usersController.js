const User = require('../models/user.js')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')


async function register(req, res)
{
    try 
    {
        const {firstName, lastName, gender, email, password, secretQuestion, secretAnswer} = {...req.body}

        let existedUser = await User.findOne({email:email.toLowerCase()})
        let encryptedPassword = await bcrypt.hash(password, 10);
        let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        let userImage;

        if(existedUser != null)
            return res.status(409).json("The user is already exist, please login")

        if(!(firstName && lastName && email && password && gender && secretQuestion && secretAnswer))
            return res.status(400).send("All filed are required")

        if(emailPattern.test(email) == false)
            return res.status(403).send(`
            The proper email must:
                Must have English letters and numbers only in the front
                Must have the charchter @
                Must have a domain like gmail or hotmail
                Must have .com or .net ...etc`)
        

        if(req.file != undefined)
        {
            userImage =  `images/${req.file.filename}`
        }
        else
        {
            userImage = `images/user-defualt-profile.jpeg`
        }

        let userInfo = 
        {
            firstName,
            lastName,
            email:email.toLowerCase(),
            password:encryptedPassword,
            gender:gender,
            secretQuestion,
            secretAnswer,
            image:userImage,

        }

        let newUser = await User.create(userInfo)
        return res.sendStatus(200).send("user has been created successfully")
    

    } catch (err) 
    {
        // res.status(502).send(err);
        console.log(err)
    }          
    

}

async function login(req, res)
{
    try 
    {
        const {email, password} = req.body   //  get the user credintionals
        const userEndPoint = req.route.path //   get the end point to check if the user is admin

        // check if required info has been given
        if(!(email && password))
           return res.status(400).send("All filed are required")

        // get the user detiles from the db
        let existedUser = await User.findOne({email:email.toLowerCase()})
        let decryptedPasswordMatch = await bcrypt.compare(password, existedUser.password)

        // handling adming status
        if(userEndPoint === "/admin-dashboard")
        {
            if(existedUser.isAdmin != true)
                return res.status(403).send("Access Denied, the action had been reported")
            else
               return res.status(200).send("You are admin, you can go")
        }
        
        if(existedUser != null && decryptedPasswordMatch)
        {
            const token = jwt.sign(
                {user_id:existedUser._id, email: existedUser.email},
                process.env.TOKEN_SECRET,
                {
                  expiresIn: "8h",
                }
              );


            // Update user's login status
            let updatedUser = await User.updateOne({email:email}, {isLogedIn:true})
            
            const userStatus = {
                isLogedIn:true,
                isAdmin:existedUser.isAdmin
            }
            let tokenInfo = {email:existedUser.email, token:token, expiresIn:"8 hours", userImage:existedUser.image, userStatus}
            return res.status(200).send(tokenInfo);
        }
        else
            return res.status(401).send("The password is incorrect")

    } catch
    {
        return res.status(404).send("No account assoicated with that email")
    }      


}

async function logout (req, res) 
{    
  await User.updateOne({email:req.body.email}, {isLogedIn:false}) 
  return res.status(200).send("You are know loged out");

};

async function resetPassword (req, res) 
{
    const {email, password, secretQuestion, secretAnswer} = req.body   //  get the user credintionals

    // check if required info has been given
    if(!(email && password && secretQuestion && secretAnswer))
        return res.status(400).send("All filed are required")

    // get the user detiles from the db
    let existedUser = await User.findOne({email:email.toLowerCase()})
    console.log(req.body)
    if(existedUser == null)
    {
        return res.status(404).send("Account Not Found");
    }

    if((existedUser.secretQuestion == secretQuestion) && (existedUser.secretAnswer == secretAnswer))
    {
        let encryptedPassword = await bcrypt.hash(password, 10);
        await User.updateOne({email:email}, {password:encryptedPassword}) 
        return res.status(200).send("Your password had been changed");
    }
    else
    {
        return res.status(401).send("Secrect Question or Answer are incorrect");        
    }

};


async function getUserStatus(req,res)
{
    let userInfo = await User.findOne({email:req.body.email})


    if(userInfo)
    {
        let userStatus = 
        {
            isLogedIn:userInfo.isLogedIn,
            isAdmin:userInfo.isAdmin
        }
        console.log(userStatus)
        return res.status(200).json(userStatus);
    }
    else
        return res.status(404).send("There is account with this email");

    
     
}

module.exports = {
    register,
    login,
    logout,
    resetPassword,
    getUserStatus
}