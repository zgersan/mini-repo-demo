import mongoose, {models} from 'mongoose'

const blogSchema = new mongoose.Schema({
    subject:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    imagePost:{
        type:String,
        required:true
    },
    dateTime:{
        type:String,
        required:true
    },
    isActive:{
        type:Boolean,
        required:true
    }
})
mongoose.models = {};
mongoose.modelSchemas = {};
export default mongoose.models.blog || mongoose.model('blog', blogSchema)