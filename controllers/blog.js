const Post=require('../models/post')
const index=(req,res)=>{
    res.send('Hello from blog/index')
}
class API{
    static async fetchAllPost(req,res){
        try{
            const post=await Post.find()
            res.status(200)
            .json(post)
        }
        catch(err){
            res.status(404)
            .json({message:err.message})
        }
    }
    static async fetchPostById(req,res){
        res.send('Hello postByid')
    }
    static async createPost(req,res){
     const post=req.body
     
    }
    static async updatePost(req,res){
        res.send('Hello updatePost')
    }
    static async deletePost(req,res){
        res.send('Hello deletePost')
    }
}


module.exports={
    index,
    API
}