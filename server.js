const app = require('./app.js')
const mongo = require('./Database/Mongo.js')
const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Server is up and running on ${port}`)
})
