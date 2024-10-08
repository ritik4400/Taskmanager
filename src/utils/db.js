const mongoose = require('mongoose');
//DB connection
const connectionDB = async()=>{
    try{
      await  mongoose.connect(process.env.MONGO_URI)
    }catch(error){
        console.error("error in db",error);
    }
}
mongoose.connection.on('error', (error) => {
    console.log(error)
  })
  mongoose.connection.once('connected', () => {
    console.log('Database Connected')
  })

  module.exports= {
    connectionDB
  }