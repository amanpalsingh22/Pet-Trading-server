const mongoose = require('mongoose')

const UserModel = mongoose.Schema({
    uid: {
        type: Number
    },
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
})

module.exports = mongoose.model('Users', UserModel, 'Users')
