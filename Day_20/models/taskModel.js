const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema(
    {
        title :{
            type: String,
            requried: true,
            trim: true,
        },
        description:{
            type: String,
            default: "",
            trim: true,
        },
        status:{
            type: String,
            enum: ['pending','completed'],
            default: 'pending',
        },
    },
    {
         timestamps: true
    }
);

const Task = mongoose.model("Task",taskSchema);
module.exports= Task;

