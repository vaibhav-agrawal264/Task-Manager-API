const express=require('express')
const app=express()
const connectDB=require('./db/connect')
const tasks=require('./routes/tasks')
const notFound=require('./middleware/not-found')
const errorHandlerMiddleware=require('./middleware/error-handler')
app.use(express.static('./public'))
app.use(express.json())


require('dotenv').config()


app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

const port= process.env.PORT || 3000
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