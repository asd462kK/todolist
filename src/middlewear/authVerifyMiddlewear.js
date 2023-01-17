require('dotenv').config({path:'./config.env'});
const jwt = require('jsonwebtoken');
module.exports=(req,res,next)=>{
    const token = req.headers['token'];
    console.log(`Middleware Token Type : ${typeof(token)} \n ${token}`);

    jwt.verify(token,process.env.SECRET_KEY, (error,decoded)=>{
        if(error)
            res.status(401).json({status:'Middleware Checking Failed. Unathorized Access',data:error});
        else{
            const userName = decoded['data']['userName'];
            console.log(`Username From Middleware : ${userName}`);
            req.headers.userName = userName;
            next();
        }
    });
};
