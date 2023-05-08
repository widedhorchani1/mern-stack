const mongoose = requiore ("mongoose")
const Schema=mongoose.Schema()

const postSchema= new Schema ({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        default:"No photo"
    },

})
const Post =mongoose.model("Post",postSchema)
module.exports = Post