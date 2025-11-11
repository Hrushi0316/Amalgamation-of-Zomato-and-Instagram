const mongoose = require("mongoose");

const foodPartnerSchema = new mongoose.Schema({

    name:{
        type:String
    },
    email:{
      type:String,
      requied:true,
      unique:true
    },
    password:
    {
        type:String,
        required:true
    },
    address:{
        type:String,
        requied:true
    },
    phone:{
        type:Number,
        unique:true
    }
    

},{
    timestamps:true
});

module.exports = mongoose.model('FoodPartner',foodPartnerSchema);