const mongoose = require('mongoose')



const connectDB = async (url) =>{
    await mongoose.connect(url,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true,
        useFindAndModify:false
    })
    console.log('DB connected')
}
module.exports = connectDB
