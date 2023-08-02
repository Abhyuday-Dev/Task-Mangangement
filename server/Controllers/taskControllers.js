const taskModel = require("../Models/taskModel");


const newTask=async(req,res)=>{
    try{
        const data=req.body;
        const newTask=new taskModel(data);
        await newTask.save().then(()=>{
            res.status(200).json({message:"Task added successfully"})
        });
    }catch (error) {
        console.log(error);
    }
}

const getTask = async (req, res) => {
    try {
      const tasks = await taskModel.find();
      res.status(200).json({ tasks });
    } catch (error) {
      console.log(error);
    }
  };
  

  const getTaskById = async (req, res) => {
    try {
      const task = await taskModel.findById(req.params.id);
      res.status(200).json({ task });
    } catch (error) {
      console.log(error);
    }
  };
  
const updateTask = async (req, res) => {
    const id = req.params.id;
    const { title, description, status } = req.body;
    try {
      await taskModel.findByIdAndUpdate(id, { title, description, status });
      res.status(200).json({ message: "Data Updated Successfully" });
    } catch (error) {
      console.log(error);
    }
  };
  

const deleteTask=async(req,res)=>{
    try {
        await taskModel.findByIdAndDelete(req.params.id).then(()=>{res.status(201).json({message:"Task deleted"})})
    } catch (error) {
        console.log(error)
    }
}

module.exports = { newTask,getTask,updateTask,deleteTask,getTaskById };
