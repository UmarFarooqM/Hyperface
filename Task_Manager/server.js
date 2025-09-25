const express = require("express")
const taskrouter = require("./routes/task.routes")


const app= express()
const port= 3000

app.get("/test", (req,res)=>{
    res.send("test route")
})

app.get("/taskmanager", taskrouter)

app.listen(port, ()=>{
    console.log("server is running properly")
})