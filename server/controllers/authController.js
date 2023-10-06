const User = require('../models/user')
const { hashPassword, comparePassword } = require('../helpers/auth')

const test = (req, res) => {
    res.json('test is working')
}

const registerUser = async (req, res) => {




module.exports = {
    test
}
