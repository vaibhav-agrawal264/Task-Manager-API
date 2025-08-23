const Tasks=require('../models/tasks')
const asyncWrapper=require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')


const getalltask= asyncWrapper( async (req,res)=>{

        const tasks=await Tasks.find({})
        res.status(200).json({tasks})
    
})

const createtask= asyncWrapper( async (req,res)=>{
    
        const task=await Tasks.create(req.body)
        res.status(201).json({task})
    
    
})

const gettask=asyncWrapper(async (req,res,next)=>{
    
        const {id:taskID}=req.params
        const task=await Tasks.findOne({_id:taskID})
        if(!task){
            return next(createCustomError(`No task with ID: ${taskID}`,404))
        }
        res.json({task})
   
    
})

const deletetask=asyncWrapper(async (req,res)=>{

        const {id:taskID}=req.params
        const task=await Tasks.findOneAndDelete({_id:taskID})
        if(!task){
            return next(createCustomError(`No task with ID: ${taskID}`,404))
        }
        res.status(200).json({task})
    
})

const updatetask=asyncWrapper( async (req,res)=>{
    
        const {id:taskID}=req.params
        const task=await Tasks.findOneAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true
        })
        if(!task){
            return next(createCustomError(`No task with ID: ${taskID}`,404))
        }
        res.status(200).json({task})
   
})


module.exports={
    getalltask,
    createtask,
    gettask,
    updatetask,
    deletetask
}