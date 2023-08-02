const mongoose= require('mongoose');
require("../database/db");
mongoose.connect("mongodb+srv://abhyuday7176:user@task.zqxyezw.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
  console.log("Databas connection established")
})