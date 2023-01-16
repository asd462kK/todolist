


const mongoose=require('mongoose')

const DataSchema=mongoose.Schema({



firstName:{type:String},
lastName:{type:String},
emailAddress:{type:String},
phoneNumber:{type:String},
userName:{type:String,unique:true},
city:{type:String},
passWord:{type:String}


},{versionKey:false});  
const profileModel = mongoose.model('profiles',DataSchema);
module.exports = profileModel;
