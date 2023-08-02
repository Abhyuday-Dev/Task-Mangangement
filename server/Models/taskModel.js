const mongoose = require('mongoose');

const taskSchema=new mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    status:{type:String, required:true},
});

module.exports =new mongoose.model("Task",taskSchema);