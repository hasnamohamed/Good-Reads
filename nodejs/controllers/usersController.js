const User = require('../models/user.js')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')


async function register(req, res)
{
    try 
    {
        const {first_name, last_name, image, email, password, secretQuestion, secretAnswer} = req.body

        let existedUser = await User.findOne({email:email.toLowerCase()})
        let encryptedPassword = await bcrypt.hash(password, 10);
        let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

        if(!(first_name && last_name && email && password && secretQuestion && secretAnswer))
            return res.status(400).send("All filed are required")

        if(emailPattern.test(email) == false)
            return res.status(450).send(`
            The proper email must:
                Must have English letters and numbers only in the front
                Must have the charchter @
                Must have a domain like gmail or hotmail
                Must have .com or .net ...etc`)
        
        if(existedUser != null)
            return res.status(450).send("The user is already exist, please login")

        else
        {
            let userInfo = 
            {
                first_name,
                last_name,
                image,
                email:email.toLowerCase(),
                password:encryptedPassword,
                secretQuestion,
                secretAnswer
            }
            let newUser = await User.create(userInfo)
            
            return res.status(200).send("The account has been added successfully")
        }
        

    } catch (err) 
    {
        return res.status(502).send(err);
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

        if(userEndPoint === "/admin" && existedUser.isAdmin != true)
        {
            return res.status(400).send("Access Denied, the action had been reported")
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
            await User.updateOne({email:email}, {isLogedIn:true})
            
            let tokenInfo = {email:existedUser.email, token:token, expiresIn:"8 hours"}
            return res.status(200).send(tokenInfo)       
        }
        else
            return res.status(450).send("The password is incorrect")

    } catch
    {
        return res.status(450).send("No account assoicated with that email")
    }      


}

async function logout (req, res) 
{
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
    
  await User.updateOne({email:req.body.email}, {isLogedIn:false}) 
  return res.status(401).send("You are know loged out");

};

async function restPassword (req, res) 
{
    const {email, password} = req.body   //  get the user credintionals

    // check if required info has been given
    if(!(email))
       return res.status(400).send("All filed are required")

    // get the user detiles from the db
    let existedUser = await User.findOne({email:email.toLowerCase()})
    let encryptedPassword = await bcrypt.hash(password, 10);

    await User.updateOne({email:email}, {password:encryptedPassword}) 
    return res.status(401).send("Your password had been changed");

};


module.exports = {
    register,
    login,
    logout,
    restPassword
}