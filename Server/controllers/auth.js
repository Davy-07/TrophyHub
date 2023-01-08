require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const CustomAPIError = require('../errors/customError');

const config = {
    apiKey: process.env.mojoauth_api,
}
const mojoauth = require("mojoauth-sdk")(config);



const register = async(req,res)=>{

    const{name,email,phone,pwd} = req.body;
    if(!name || !email || !phone || !pwd)
    {
        //throw new CustomAPIError("Please Provide all the fields",401);
        return res.status(401).json({message:"Please Provide all the fields"});
    }

    const already_email = await User.find({email});
    const already_phone = await User.find({phone});
    if(already_phone.length>0 || already_email.length>0)
    {
       //throw new CustomAPIError('User Already Exists')
        return res.status(401).json({message:"User Already Exists"});
    }
    
    
    const password = await bcrypt.hash(pwd,10);
    
    

    let query = {}
    query.language = "English";

    try{
        const response = await mojoauth.mojoAPI.signinWithPhoneOTP(phone,query);
        const{state_id} = response;
        const new_user = await User.create({name,email,phone,password});
        console.log(new_user);
        const {_id} = new_user;
        res.status(200).json({message:'Success',state_id,_id});
    }
    catch(err){
            throw new CustomAPIError('Oops! Something went wrong',401);
    }
}

const verify = async(req,res)=>{

    const{state_id,_id,otp} = req.body;
    const response = await mojoauth.mojoAPI.verifyPhoneOTP(otp,state_id);
    console.log(response);
    const{authenticated} = response;
    if(authenticated){
        const verify_user = await User.updateOne({_id},{
            isVerified: true
        })
        console.log(verify_user);
        res.status(200).json({msg:"OTP Verified"});
    }
    else{
        return res.status(400).json({message:"Please enter the correct otp"})
    }
}

const signin = async(req,res)=>{

        const{email,password} = req.body;
        if(!email || !password)
        {
            return res.status(400).json({message:"Please Enter all the fields"});
        }

        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"User Does Not Exist"});
        }

        const result = await bcrypt.compare(password,user.password);
        if(!result)
        {
            return res.status(400).json({message:"Invalid Email Or Password"});
        }
        
        try{
            const token = jwt.sign({id:user._id,name:user.name,email:user.email,phone:user.phone},process.env.JWT_TOKEN,{expiresIn:'30d'});
            res.status(200).json({message:"SignIn SuccessFull",token});
        }
        catch(err){
            throw new CustomAPIError("Oops! Something Went Wrong");        
        }
}

const demo = async(req,res)=>{

        res.status(200).json({message:"Token Verification SuccesFull"});

}

module.exports = {register,verify,signin,demo};