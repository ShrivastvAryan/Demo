require("dotenv").config();
const mongoose = require('mongoose');

function generateRefCode(length = 6) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

const User= new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ref_code:{
       type: String,
       default: () => generateRefCode(8),
       unique: true,
    },
    amount_raised: {
        type: Number,
        default: 0,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

const UserModel = mongoose.model('User', User);

module.exports = UserModel; 