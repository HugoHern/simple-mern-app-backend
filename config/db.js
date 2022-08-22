// SET UP FOR MONGOOSE DATABASE
const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

//CONNECT TO DB USING MONGOOSE
const connectDB = async () => {
    try{
        await mongoose.connect(db, {useNewUrlParser: true})
        console.log('Database is connected')
    } catch(err){
        console.error(err.message)
        process.exit(1)
    }
    
}

module.exports = connectDB