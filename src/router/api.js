 const express =require("express");
 const profilecontroller=require("../controllers/profilecontroller");
const todolistcontroller=require("../controllers/todolistcontroller");
 const authVerifyMiddlewear = require("../middlewear/authVerifyMiddlewear");
const router=express.Router();



 router.post("/createprofile",profilecontroller.createprofile);
 router.post("/userloging",profilecontroller.userloging);


 router.get("/SelectProfile",authVerifyMiddlewear,profilecontroller.SelectProfile);
 router.post("/updateProfile",authVerifyMiddlewear,profilecontroller.updateProfile);
 router.post("/createToDo",authVerifyMiddlewear,todolistcontroller.createToDo);
 router.get("/SelectTodo",authVerifyMiddlewear,todolistcontroller.SelectTodo);
 router.post("/UpdateTodo",authVerifyMiddlewear,todolistcontroller.UpdateTodo);



 module.exports=router;