require('dotenv').config();
const mongoose = require('mongoose');

//This database can be made through the admin panel which will be seperately created

const UserInfo=new mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
    },
    amount:{
        type: Number,
    },
    campaign:{
        type: String,
    }
})

const UserInfoModel = mongoose.model('UserInfo', UserInfo);

module.exports = UserInfoModel;