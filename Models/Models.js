const mongoose = require('mongoose')


const TaskSchema = new mongoose.Schema(
    
    {
    name:{
        type:String,
        required: [true, 'Must Provide a Name for Task'],
        trim:true,
        maxlength:[50, 'name can not be more than 25 characters']
    },
    expired:{
        type:Boolean,
        default:false
    },
    expiryDate:{
        type:String,
        required:true,
    },
    creationDate:{
        type:String,
        required:true,
        
    }
    }
)


const TaskModel = mongoose.model('Task', TaskSchema)

module.exports = TaskModel





//basic Schema
// {
//     name:String,
//     completed:Boolean,
// }
