const app=require("./app")
app.listen(5000,()=>{
    console.log("server run port 5000")

});


// // const app =require("./app");
// // const dotenv = require("dotenv")
// // dotenv.config({path:"./config.env"})


// app.listen(process.env.RUNNING_PORT,function(){
//     console.log('Server running success from ' + process.env.RUNNING_PORT);
// });
//  module.exports = index;