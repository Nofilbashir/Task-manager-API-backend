const TaskModel =  require('../Models/Models')

//================================================================================
// model.find can be used with await so making the function async
const getAllTasks = async (req, res) =>{
    try{
    //get all the documents in a model
    const AllTasks = await TaskModel.find({})
   
    res.status(201).json( {success:true, length:AllTasks.length, data:AllTasks.reverse()} )


    }catch(err){
        res.status(500).json({success:false,message:err.message})
    }
}


//===================================================================================

//===================================================================================
const getExpired = async (req, res) =>{
    try{
    //get all the completed documents in a model
    const AllCompletedTasks = await TaskModel.find({expired:true})
    res.status(201).json( {success:true,length:AllCompletedTasks.length,data:AllCompletedTasks} )

    }catch(err){
        res.status(500).json({success:false, message:err.message})
    }
}
//===================================================================================
//===================================================================================
const getNotExpired = async (req, res) =>{
    try{
    //get all the completed documents in a model
    const AllCompletedTasks = await TaskModel.find({expired:false})
    res.status(201).json( {success:true,length:AllCompletedTasks.length,data:AllCompletedTasks} )

    }catch(err){
        res.status(500).json({success:false, message:err.message})
    }
}
//===================================================================================



//===================================================================================
const createTask = async (req, res)=>{
    try{
        const NewTask = await TaskModel.create(req.body)
        res.status(201).json( {success:true, data:NewTask} )
    }
    catch(err){
        res.status(500).json({success:true,message:err.message})

    }

}

//===================================================================================


//===================================================================================
const getSingleTask = async (req, res)=>{

    try{
    // get Single Task based on ID param
    const TaskID = req.params.id
    const SingleTask = await TaskModel.findOne({_id:TaskID})
        if(SingleTask===null){
            return res.status(404).json({success:false, mesage:`No Task With ID ${TaskID}`})
        }
    res.status(201).json({success:true, data:SingleTask})

    }catch(err){
        res.status(500).json({success:false, message:err.message})
    }


}
//===================================================================================



//===================================================================================
const deleteTask = async(req, res)=>{
    try{
        const TaskID = req.params.id
        const DeletedTask = await TaskModel.findOneAndDelete({_id:TaskID})
        if(DeletedTask===null){
            return res.status(404).json({success:false,msg:`Task Already Deleted, Could not find a task with ID: ${TaskID}`})
        }
        res.status(201).json( {success:true, data:DeletedTask} )
    }catch(err){
        res.status(500).json({success:false, message:err.mesage})
    }
   
}
//===================================================================================


const deleteAll = async (req, res)=>{
    try{
        await TaskModel.deleteMany({})
        res.status(201).json( {success:true, message:`All Tasks Deleted`} )
    }
    catch(err){
        res.status(500).json({success:true,message:err.message})

    }

}

const deleteExpired = async (req, res)=>{
    try{
        await TaskModel.deleteMany({expired:true})
        res.status(201).json( {success:true, message:`All Expired Tasks Deleted`} )
    }
    catch(err){
        res.status(500).json({success:true,message:err.message})

    }

}


//===================================================================================
const updateTask = async (req, res)=>{
    try{
        const TaskID = req.params.id;
        const NewTask= await TaskModel.findOneAndUpdate({_id:TaskID},req.body,{new:true,runValidators:true})
        if(!NewTask){
            return res.status(404).json({success:false,message:`No tasK with ID ${TaskID}`})
        }
        res.status(200).json({success:true, id:TaskID , data:NewTask})

    }catch(err){
        res.status(500).json({success:false,message:err.mesage})
    }
}
//===================================================================================

const EditTask = async(req, res)=>{
    try{
        const TaskID = req.params.id;
        const EditedTask = await TaskModel.findOneAndUpdate({_id:TaskID}, req.body, {new:true, runValidators:true, overwrite:true})
        if(!EditedTask){
            return res.status(404).json({success:false, message:`No Task Found with ID ${TaskID}`})
        }
        res.status(200).json({success:true,id:TaskID, data:EditedTask})
        
    }
    catch(err){
        res.status(500).json({success:false,message:err.mesage})
    }

}

module.exports ={getAllTasks, createTask,getSingleTask, deleteTask, deleteExpired,updateTask,getNotExpired, getExpired, EditTask,deleteAll}