const mongoose = require('mongoose');

const foodSchema = new  mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
      type:String,
      required:true,
      unique:true  
    },video:{
        type:String,
        required:true,
    },
    foodPartner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"foodpartner"
    }
});

module.exports=mongoose.model('food',foodSchema);