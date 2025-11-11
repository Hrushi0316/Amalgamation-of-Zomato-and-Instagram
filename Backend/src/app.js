const express = require('express');
const authroute = require('./routes/auth.routes');
const foodroutes = require("../src/routes/food.routes")
const cookieParser = require('cookie-parser');
const cors = require('cors');


const app = express();
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.use(express.json());
app.use(cookieParser());


app.get('/',(req,res)=>{
    res.send("This is the home page..");
});

app.use("/auth",authroute);

//for food route..
app.use("/api/food",foodroutes);


module.exports=app;

