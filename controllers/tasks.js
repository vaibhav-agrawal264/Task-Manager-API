const Tasks=require('../models/tasks')

const getalltask=async (req,res)=>{
    try {
        const tasks=await Tasks.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const createtask= async (req,res)=>{
    try {
        const task=await Tasks.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
    
}

const gettask=(req,res)=>{
    res.json({id:req.params.id})
}

const updatetask=(req,res)=>{
    res.send('update the task')
}

const deletetask=(req,res)=>{
    res.send('delete task')
}
module.exports={
    getalltask,
    createtask,
    gettask,
    updatetask,
    deletetask
}