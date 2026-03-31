const Task= require("../models/taskModel");

//Create 
const createTask = async (req,res) => {
    try{
    const {title, description, status }= req.body;

    const newTask = Task.create({title,description,status});

    res
    .status(201)
    .json(
        {
            succes:true,
            message:"Task Created",
            data: newTask
        }
    );
}
    catch(e){
        res.status(500).json(
            {
                success:false,
                message:"Unable to Create",
                error: e.message
            }
        );
        console.log(e.message)
    }

};


//Retrieve
const getAllTask =() => {};

//Update

//Delete

module.exports = {createTask, getAllTask};