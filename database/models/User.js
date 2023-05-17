const bcrypt = require('bcrypt');

const mongoose = require('mongoose');

const Userschema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please provide your username']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true
    },
    password: { 
        type: String,
        required: [true, 'Please provide your password']
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

Userschema.pre('save', async function(next){
    const user = this;

    user.password = await bcrypt.hash(user.password, 10);
    next();
});

const User = mongoose.model('User', Userschema)

module.exports = User