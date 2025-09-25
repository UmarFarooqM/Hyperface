const model = require("module")
const express = require("express")
const { type } = require("os")
const TaskSchema = express.create(
    {
        Title:{required:true, type:String},
        Description :{type:String},
        DueDate:{type:Date.now()},
        status:{enum:["pending", "completed"]}
    }
)

const usermodel =  new model('taskmodel', TaskSchema)


module.exports = usermodel