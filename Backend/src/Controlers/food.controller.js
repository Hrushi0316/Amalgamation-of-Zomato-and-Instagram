const foodModel  = require("../Schemas/food.model");

async function createFood(req,res){
    try {
        if (!req.foodPartner) {
            return res.status(401).json({ message: "Not authorized to create food" });
        }

        const item = await foodModel.create({
            name: req.foodPartner.name,
            description: req.body.description,
            video: req.body.video,
            address: req.foodPartner.address,
            phone: req.foodPartner.phone,
            foodPartner: req.foodPartner._id
        });

        console.log(item);
        return res.status(201).json({ Message: "Food item created successfully" });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error", error: err.message });
    }
}


async function getFoodItem(req,res){
  const foodItems = await foodModel.find({});
  res.status(200).json({ Message:"Items fetched", foodItems });
}

module.exports = { createFood, getFoodItem };
