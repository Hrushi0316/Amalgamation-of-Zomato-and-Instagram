const express = require("express");
const route = express.Router();
const foodController = require("../Controlers/food.controller");
const authMiddleware = require("../middleware/auth.middleware")


route.post("/",authMiddleware.authFoodPartnerMiddleware ,foodController.createFood);

route.get("/api/food",authMiddleware.authUserMiddleware,foodController.getFoodItem)

module.exports = route;