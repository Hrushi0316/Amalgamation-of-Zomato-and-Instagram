const mongoose = require('mongoose');
require('dotenv').config({ silent: true });


mongoose.connect(process.env.mongoURL)
.then(()=>{
    console.log("✅ Database connected successfully!");
    
})
.catch((err)=>{
    console.error("❌ Database connection failed:", err.message);
    })