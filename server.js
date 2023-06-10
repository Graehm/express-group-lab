require('dotenv').config() //connecting the secret 
const app = require('./app') //
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000 // put the port here so its incrypted 
mongoose.connect(process.env.MONGO_URI) // 
mongoose.connection.once('open',()=>console.log('Mongo is showing love')) 

app.listen(PORT,()=>{
    console.log(`We in the building ${PORT}`)
})