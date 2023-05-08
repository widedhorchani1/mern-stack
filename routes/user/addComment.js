const express=require("express")
const router=express.router
const Comment=require("../../models/Comment")
router.post("/", async(req,res)=>{
    try {
        const {content,author,post}=req.body
        const comment=new Comment ({content,author,post})
        await comment.save()
        res.sattus(201).json(comment)
    } catch (err) {
        res.status(400).json({message:err.message})        
    }
})
module.exports=router