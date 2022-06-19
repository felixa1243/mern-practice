const mongoose=require('mongoose')

const postSchema=mongoose.Schema({
    title:String,
    id:String,
    category:String,
    image:String,
    created:{
        type:Date,
        default:Date.now()
    }
})
