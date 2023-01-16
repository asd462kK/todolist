



const profileModel = require('../models/profilemodel');

 var jwt = require('jsonwebtoken');
 
 exports.createprofile=(req,res)=>{
    let reqBody=req.body;
 profileModel.create(reqBody,(error,data)=>{

if(error){
res.status(400).json({status:"fail",data:error});

}
else{
    res.status(200).json({status:"success",data:data});
}
})
}

exports.userloging = (req,res)=>{
    let userName=req.body['userName'];
    let passWord=req.body['passWord'];

    profileModel.find({userName:userName,passWord:passWord},(error,data)=>{
       if(error){
          res.status(400).json({status:"Login Failed",data:error})
       }else{
          if(data.length>0){
             const payload={
                exp: Math.floor(Date.now() / 1000) + (720 * 60 * 60),data:data[0]
             }
             const Token =jwt.sign(payload,'abcd12345');
            res.status(200).json({status:"Login successfull. SAVE THE USER TOKEN TO variable",Token:Token,data:data});
          }
          else{
             res.status(401).json({status:"Wrong Username or Password"});
          }
       }
    });
};


exports.SelectProfile=(req,res)=>{

    let  userName=req.headers['userName'];
//    let  userName="Rezwan";
    profileModel.find({userName:userName},(error,data)=>{


        if(error){
            res.status(401).json({status:"fail",data:error});
            
            }
            else{
                res.status(200).json({status:"success",data:data});
            }
            


    })
}




exports.updateProfile=(req,res)=>{

    let  userName=req.headers['userName']

    let reqBody=req.body;
//res.status(200).json(reqBody);
    profileModel.updateOne({userName:userName},{$set:reqBody},{upsert:true},(error,data)=>{

        if(error){
            res.status(401).json({status:"fail",data:error});
            
            }
            else{
                res.status(200).json({status:"success",data:data});
            }
            

    })
}