const mongoose = requiore ("mongoose")
const {objectId}=mongoose.Schema.Types
const Schema=mongoose.Schema()

const commentSchema= new Schema ({
    content:{
        type:String,
        required:true
    },
    auther:{
        type:String,
        required:true
    },
    post:{
        type:mongoose.Schema.Types.objectId,
        ref:"Post",
        required:true
    },
    postedBy:{
        type:objectId,
        ref:"User"
    }

})
const Comment =mongoose.model("Post",commentSchema)
module.exports = Comment