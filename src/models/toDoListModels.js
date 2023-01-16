
const mongoose=require('mongoose')

const DataSchema=mongoose.Schema({
    userName:{type:String},
   TodoSubject:{type:String},
   TodoDescripition:{type:String},
   TodoStatus:{type:String},
   TodoCreateDate:{type:Date},
   TodoUpdateDate:{type:Date}


},{versionKey:false});  
const toDoListModels = mongoose.model('ToDoList',DataSchema);
module.exports = toDoListModels