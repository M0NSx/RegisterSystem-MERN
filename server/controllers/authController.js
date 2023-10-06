const User = require('../models/user')
const { hashPassword, comparePassword } = require('../helpers/auth')

const test = (req, res) => {
    res.json('test is working')
}

const registerUser = async (req, res) => {
    try {
        const {nickname, email, password} = req.body;
        // Check if nickname was entered
        if(!nickname) {
            return res.json({
                error: 'nickname is required'
            })
        }
        // Check if password is good
        if(!password || password.length < 6) {
            return res.json({
                error: 'password is required and has to be more than 6 caracters'
            })
        }
        // Check email



        
module.exports = {
    test
}
