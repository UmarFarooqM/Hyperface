const express = require("express");
const tasks = require("../data/task");

const taskrouter = express.Router()

taskrouter.post("/addtask", (req,res)=>{
    const {Title, Description,DueDate} = req.body;
    if(!Title){
        res.send("Title is mandatory")
    }

    const newTask= {
        Title:Title,
        Description:Description,
        DueDate: Date.now()
    }
    tasks.push(newTask)

    res.send("new Task is added", newTask)
} )

taskrouter.get("/gettask", (req,res)=>{
        // res.send(tasks)
        
        res.send("all the task", tasks)
})


taskrouter.patch("/updatetask/:id",(req,res)=>{
    
    const {Title,Description,status} = req.body;
    if(!Title){
        res.send("Title")
    }
    tasks =   [...tasks, {Title:Title, Description:Description,status:status}]

})


taskrouter.get("/pendingTask",(req,res)=>{

       const pendingtask= tasks.filter((task)=> task.status=="pending")

        res.send("pending task list", pendingtask)

})

taskrouter.get("/completedTask", (req,res)=>{

    const completedtask = tasks.filter((ele)=> ele.status =="completed")
    res.send(completedtask)
})



module.exports = taskrouter