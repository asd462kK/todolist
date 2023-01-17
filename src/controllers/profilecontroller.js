const profileModel = require('../models/profilemodel');
var jwt = require('jsonwebtoken');
require('dotenv').config({path:'./config.env'});

exports.createprofile=(req,res)=>{
    let reqBody=req.body;
    profileModel.create(reqBody,(error,data)=>{
        
        if(error){
            res.status(400).json({status:"Profile Create Failed",data:error});
            
        }
        else{
            res.status(200).json({status:"Profile Created Successfully",data:data});
        }
    })
}

exports.userloging = (req,res)=>{
    const userName=req.body['userName'];
    const passWord=req.body['passWord'];
    
    profileModel.find({userName:userName,passWord:passWord},(error,data)=>{
        if(error){
            res.status(400).json({status:"Login Failed",data:error})
        }else{
            if(data.length>0){
                const payload={
                    exp: Math.floor(Date.now() / 1000) + (720 * 60 * 60),
                    data:data[0]
                };
                const token =jwt.sign(payload,process.env.SECRET_KEY);
                res.status(200).json({status:"Login successfull. SAVE THE USER TOKEN TO variable",token:token,data:data});
            }
            else{
                res.status(401).json({status:"Wrong Username or Password"});
            }
        }
    });
};

exports.SelectProfile=(req,res)=>{
    const  userName=req.headers['userName'];
    profileModel.find({userName:userName},(error,data)=>{
        if(error){
            res.status(401).json({status:"Profile Select Failed",data:error});
        }
        else{
            res.status(200).json({status:"Profile Selected Successfully",data:data});
        }
    })
}

exports.updateProfile=(req,res)=>{
    let  userName=req.headers['userName']
    let reqBody=req.body;
    //res.status(200).json(reqBody);
    profileModel.updateOne({userName:userName},{$set:reqBody},{upsert:true},(error,data)=>{
        if(error){
            res.status(401).json({status:"Profile Update Failed",data:error});
        }
        else{
            res.status(200).json({status:"Profile Update Successful",data:data});
        }
    })
}