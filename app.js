const bodyParser = require('body-parser')
const express=require('express')
const app=express()
const mongoose=require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>console.log('connected'))
.catch(err=>console.log(err))
const port=process.env.port||3000
const blogRoute=require('./routes/blog.route')
app.use(bodyParser)
app.use('/blog',blogRoute)
app.get('/',(req,res)=>{
    res.send('test')
})
app.listen(port,()=>console.log(`server running on port ${port}`))