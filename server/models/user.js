const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    nickname: String,
    email: {
        type: String,
        unique: true
    },
    password: String
})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel;