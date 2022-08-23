const express = require('express');
const app = express()
const taskRoute = require('./routes/Taskroutes')
const connectDB = require('./DB/connect')
require('dotenv').config()
const TaskModel = require('./Models/Models')
const NotFound = require('./MiddleWare/Nof-Found')
const cors = require('cors')



//middleware
app.use(express.json())

app.use(cors())


//routes
app.use('/api/v1/tasks' , taskRoute)
app.use(NotFound)




//server setup
const port = 5000

const start = async () =>{

    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(port , console.log(`server is listening on port ${port}...`))
    }
    catch(err){
        console.log(err)
    }
}

start()
 


