const toDoListModels = require('../models/toDoListModels')


 
exports.createToDo=(req,res)=>{
    let reqBody=req.body;


    let TodoSubject=reqBody['TodoSubject'];
    let TodoDescripition=reqBody['TodoDescripition'];
    let userName = req.headers['username'];
    let  TodoStatus ='New';
    let TodoCreateDate=Date.now();
    let TodoUpdateDate=Date.now();

    let postBody={
        
        userName:userName,
        TodoSubject:TodoSubject,
        TodoDescripition:TodoDescripition,
        TodoStatus:TodoStatus,
        TodoCreateDate:TodoCreateDate,
        TodoUpdateDate:TodoUpdateDate
    }


    toDoListModels.create(postBody,(error,data)=>{

if(error){
res.status(400).json({status:"fail",data:error});

}
else{
    res.status(200).json({status:"success",data:data});
}
})
}


// SelectTodo



exports.SelectTodo=(req,res)=>{

    let  UserName=req.headers['userName'];

    toDoListModels.find({userName:UserName},(error,data)=>{


        if(error){
            res.status(401).json({status:"fail",data:error});
            
            }
            else{
                res.status(200).json({status:"success",data:data});
            }
            


    })
}
//updatetodo



exports.UpdateTodo=(req,res)=>{

   let TodoSubject = req.body['TodoSubject']
   let TodoDescripition = req.body['TodoDescripition']
   let _id = req.body['_id']
   let TodoUpdateDate=Date.now();
   let postBody={

    TodoSubject:TodoSubject,
    TodoDescripition:TodoDescripition,
    TodoUpdateDate:TodoUpdateDate
   }
   toDoListModels.updateOne({_id:"_id"},{$set:postBody},{upsert:true},(error,data)=>{

    if(error){
        res.status(401).json({status:"fail",data:error});
        
        }
        else{
            res.status(200).json({status:"success",data:data});
        }
        


   })
}