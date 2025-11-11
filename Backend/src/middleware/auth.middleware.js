const jwt = require("jsonwebtoken");
const foodPartnerModel = require("../Schemas/foodpartner.model");
const userModel = require("../Schemas/user.model");

// ✅ FOOD PARTNER AUTH
async function authFoodPartnerMiddleware(req, res, next) {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "First you need to login.." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const foodPartner = await foodPartnerModel.findById(decoded.id);

    if (!foodPartner) {
      return res.status(404).json({ message: "Food Partner not found" });
    }

    req.foodPartner = foodPartner;

    next();
  } catch (err) {
    console.error("Auth Error:", err.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}


// ✅ USER AUTH (FIXED)
async function authUserMiddleware(req, res, next) {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ Message: "User need to Login first." });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findById(decode.id);

    req.user = user;
    next();

  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

module.exports = { authFoodPartnerMiddleware, authUserMiddleware };
