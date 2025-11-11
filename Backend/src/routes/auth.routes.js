const express = require("express");
const {registerUser,login,logout} = require("../Controlers/auth.controlers");
const {registerFoodPartner,loginFoodPartner,logoutFoodPartner}= require("../Controlers/auth.controlers")


const route = express.Router();

route.post('/user/registration',registerUser);
route.post('/user/login',login);
route.get("/user/logout",logout);


route.post("/foodPartner/registration",registerFoodPartner);
route.post("/foodPartner/login",loginFoodPartner);
route.get("/foodPartner/logout",logoutFoodPartner);



module.exports = route;