const express=require('express');

//Controller functions
const {newTask,getTask,updateTask,deleteTask,getTaskById}=require("../Controllers/taskControllers");

const router=express.Router();

//add new task 
router.post('/add', newTask);

//get all tasks
router.get('/allTasks',getTask);

//getTaskById
router.get('/getTask/:id',getTaskById);

//update task by id
router.put('/updateTask/:id',updateTask);

//delete task by id
router.delete("/deleteTask/:id",deleteTask);

module.exports=router;