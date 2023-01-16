
const jwt = require('jsonwebtoken');
module.exports=(req,res,next)=>{
    const Token = req.headers['Token'];
    console.log(typeof(Token));

    jwt.verify(Token,'abcd12345', (error,decoded)=>{
        if(error)
            res.status(401).json({status:'Unathorized Access',data:error});
        else{
            const userName = decoded['data']['userName'];
            req.headers.userName = userName;
            next();
        }
    });
};
