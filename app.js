const express = require('express')
const app = express()
require('dotenv').config();

const cors = require('cors')
app.use(cors())

// Body Parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const authRoute = require('./Routes/authRoute')
app.use(authRoute)

app.get('/api/test', (req, res) => {
    res.send('<h1 style="padding:20px; color:brown; font-size: 40px">Server is up and running. 😃</h1>')
})

module.exports = app
