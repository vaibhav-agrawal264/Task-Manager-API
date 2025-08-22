const Tasks=require('../models/tasks')
const asyncWrapper=require('../middleware/async')
const getalltask= asyncWrapper( async (req,res)=>{

        const tasks=await Tasks.find({})
        res.status(200).json({tasks})
    
})

const createtask= asyncWrapper( async (req,res)=>{
    
        const task=await Tasks.create(req.body)
        res.status(201).json({task})
    
    
})

const gettask=asyncWrapper(async (req,res)=>{
    
        const {id:taskID}=req.params
        const task=await Tasks.findOne({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`No task with the given task id:${taskID}`})
        }
        res.json({task})
   
    
})

const deletetask=asyncWrapper(async (req,res)=>{

        const {id:taskID}=req.params
        const task=await Tasks.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`No task with id:${taskID}`})
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
            return res.status(404).json({msg:`No task with id: ${taskID}`})
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