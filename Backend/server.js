const app =require('./src/app');

require('./src/db/db');
require('dotenv').config({ silent: true });


app.listen(process.env.Port,(req,res)=>{
    console.log("✅ Server is running on the port.")
});