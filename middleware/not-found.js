const notFound=(req,res)=>{
    res.status(200).send('Page does not exist')
}

module.exports=notFound