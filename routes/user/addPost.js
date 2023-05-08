const express=require ("express")
const router= express.router
const Post= require ("../../models/Post")
router.post("/", async (req,res)=>{
    try {
        const {title,content,author}=req.body
        const post=new Post ({title,content,author})
        await post.save()
        res.status(201).json(post)
    }
    catch (err){
        res.status(400).json({message:err.message})
    }
})
module.exports=router