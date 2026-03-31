const express = require('express');
const mongoose =require('mongoose');
const app = express();

require('dotenv').config();

const taskRoutes = require('./routes/taskRoute');
app.use(express.json());
app.use("/api/tasks",taskRoutes);

app.get("/",(req,res)=> {
  res.send("API Running...");
});

const connectDB = async(req,res)=>{
  try{
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("DATABASE Connection Success");
  }
  catch(e){
    console.log("ERROR in DB Connection")
  }
};
const PORT= process.env.PORT || 5001;
connectDB().then(()=>{
  app.listen(PORT, ()=>{
    console.log("Server at " + PORT);
  })
});

