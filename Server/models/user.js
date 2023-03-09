const mongoose = require('mongoose');
const {isEmail} = require('validator');

const UserSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: [true,'Please enter your name']
    },
    email:{
        type: 'string',
        required: [true,'Please enter your email'],
        unique: true,
        lowercase: true,
        validate: [isEmail,'Please enter a valid email']
    },
    phone:{
        type: 'string',
        required: [true,'Please enter your phone number'],
    },
    password: {
        type: String,
        required: [true, 'Please enter a valid password'],
        minlength: [6, 'Minimum password length must be 6 characters']
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    register_date: {
        type: Date,
        default: Date.now
    },
    refreshToken:{
        type: String,
    }    
})

module.exports = mongoose.model('User',UserSchema);