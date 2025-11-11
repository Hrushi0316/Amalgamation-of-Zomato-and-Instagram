

const userModel =require("../Schemas/user.model")
const foodPartnerModel = require('../Schemas/foodpartner.model');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function registerUser(req, res) {
  try {
    const { name, email, password,phone } = req.body;

    const isExisting = await userModel.findOne({ email });

    if (isExisting) {
      return res.status(300).json({ message: "User already exists." });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await userModel.create({
      name,
      email,
      password: hashPassword,
      phone
    });

    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.cookie("token", token);
    res.status(201).send("✅ Created successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ Message: `No user found with email ${email}` });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ Message: "Invalid password" });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 3600000
    });

    return res.status(200).json({
      message: "Login successful",
      user: { email: user.email }
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ Message: "Server Error", error: err.message });
  }
}



async function logout(req,res){
   res.clearCookie("token").json({Message:"User has been loged out.."})
}

async function registerFoodPartner(req,res){
  const {name,email,password,address,phone} = req.body;

  const isAvailable = await foodPartnerModel.findOne({email});

  try{

   if(isAvailable){
     return res.status(400).json({Message:"Food Partner already Exits.."});
   }

   const hashPassword = await bcrypt.hash(password,10);

   const foodPartner = await foodPartnerModel.create(
    {name,
    email,
    password:hashPassword,
    address,
    phone
   });

  const token = jwt.sign({ id: foodPartner._id }, process.env.JWT_SECRET,{expiresIn:"1h"});

   res.cookie("token",token);
   return res.status(201).json({
    Message:"Food Partner registered sucessfully"
   })

  }
  catch(err){
res.status(500).json({ Message: "Something went wrong", error: err.message });
  }
}

async function loginFoodPartner(req,res){
  const {email,password} =req.body;

  const foodPartner = await foodPartnerModel.findOne({email});

  if(!foodPartner){
    res.status(400).json({Message:"Invalid email or password.."});
  }

  console.log(password,foodPartner.password);
  

  const isPasswordValid = await bcrypt.compare(password,foodPartner.password);

  if(!isPasswordValid){
    res.status(400).json({Message:"Invalid email or password.."});
  }

  const token = jwt.sign({ id: foodPartner._id }, process.env.JWT_SECRET,{expiresIn:"1h"});

  res.cookie("token",token);
  res.status(200).json({Message:"Food Partner Sucessfull Login.."})

}

async function logoutFoodPartner(req, res) {
  res.cookie("token","");
  return res.json({ Message: "Food partner has been logged out.." });
}



module.exports = {registerUser,login,logout,registerFoodPartner,loginFoodPartner,logoutFoodPartner};
