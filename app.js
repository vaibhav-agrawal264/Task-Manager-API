const express=require('express')
const app=express()
const connectDB=require('./db/connect')
const tasks=require('./routes/tasks')
const notFound=require('./middleware/not-found')

app.use(express.static('./public'))
app.use(express.json())


require('dotenv').config()


app.use('/api/v1/tasks',tasks)
app.use(notFound)

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