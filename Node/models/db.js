const mongoose = require('mongoose')

module.exports = mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('Mongo DB Connected')
}).catch(err=>{console.log('There was an error',err)})
