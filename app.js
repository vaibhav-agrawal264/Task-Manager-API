const express=require('express')
const app=express()
const connectDB=require('./db/connect')
const tasks=require('./routes/tasks')
app.use(express.json())
require('dotenv').config()
app.get('/',(req,res)=>{
    res.json({success:true,msg:"Hello World"})
})

app.use('/api/v1/tasks',tasks)
const port=3000
const start= async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,(req,res)=>{
            console.log(`Server is running on port ${port}`)
        })

    }
    catch(err){
        console.log(err)
    }
}
start()