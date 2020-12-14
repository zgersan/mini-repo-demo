
import dbConnect from '../../services/database'
import Blog from '../../models/Blog'

dbConnect()


export default async (req,res)=>{
    switch (req.method)
      {
         case "GET":
           await getallBlog(req,res)
           break
      }  
}

const getallBlog = async (req,res)=>{
    try{
      const blogs =  await Blog.find({isActive:true})
      res.status(200).json(blogs)
    }catch(err){
      console.log(err)
    }
}


