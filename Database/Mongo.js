const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
let DB_URL = process.env.MONGO_DB_URL

console.log('Using DB_URL : ', DB_URL)
const database = mongoose.connect(
    DB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (error) => {
        if (!error) {
            console.log('Connected to Mongoose.')
        } else {
            console.log('Error in Mongoose connection. \n' + error)
        }
    }
)

module.exports = database
