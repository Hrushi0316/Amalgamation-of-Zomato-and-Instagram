const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        unique:true
    },
    password:{
        type:String
    }
},{
    timestamps:true
});

module.exports = mongoose.model('User',userSchema)