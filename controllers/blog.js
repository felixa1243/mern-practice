const index=(req,res)=>{
    res.send('Hello from blog/index')
}
class API{
    static async fetchAllPost(req,res){
        res.send('Hello from API')
    }
    static async fetchPostById(req,res){
        res.send('Hello postByid')
    }
    static async createPost(req,res){
        res.send('Hello createPost')
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