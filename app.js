const express=require('express')
const app=express()

const tasks=require('./routes/tasks')
app.use(express.json())

app.get('/',(req,res)=>{
    res.json({success:true,msg:"Hello World"})
})

app.use('/api/v1/tasks',tasks)

app.listen(3000,(req,res)=>{
    console.log("Server is running on port 3000")
})