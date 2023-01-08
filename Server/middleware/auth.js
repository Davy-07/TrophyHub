require('dotenv').config();
const jwt = require('jsonwebtoken');

const authController = async(req,res,next)=>{
    const authToken = req.headers.authorization;
    console.log(authToken);
    if(!authToken || !authToken.startsWith('Bearer '))
    {
        return res.status(401).json({message:"User Token Not Provided"});
    }

    const token = authToken.split(' ')[1];
    try{
        const decoded = jwt.verify(token,process.env.JWT_TOKEN);
        console.log(decoded);
    }
    catch(err)
    {
        return res.status(401).json({message:"Token Verification Failed"});
    }
    next();
}

module.exports = authController;