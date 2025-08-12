
const getalltask=(req,res)=>{
    res.send('get all task')
}

const createtask=(req,res)=>{
    res.json(req.body)
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