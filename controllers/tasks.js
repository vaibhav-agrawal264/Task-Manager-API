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

const gettask=async (req,res)=>{
    try {
        const {id:taskID}=req.params
        const task=await Tasks.findOne({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`No task with the given task id:${taskID}`})
        }
        res.json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
    
}

const deletetask=async (req,res)=>{
    try {
        const {id:taskID}=req.params
        const task=await Tasks.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`No task with id:${taskID}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const updatetask=async (req,res)=>{
    try {
        const {id:taskID}=req.params
        const task=await Tasks.findOneAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true
        })
        if(!task){
            return res.status(404).json({msg:`No task with id: ${taskID}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}


module.exports={
    getalltask,
    createtask,
    gettask,
    updatetask,
    deletetask
}