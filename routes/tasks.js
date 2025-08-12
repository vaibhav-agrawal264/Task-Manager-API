const express=require('express')
const router=express.Router()
const {getalltask,
    createtask,
    gettask,
    updatetask,
    deletetask}=require('../controllers/tasks.js')

router.route('/').get(getalltask).post(createtask)
router.route('/:id').get(gettask).patch(updatetask).delete(deletetask)
module.exports=router