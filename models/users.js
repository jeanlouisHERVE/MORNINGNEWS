const mongoose = require('mongoose')

const myarticlesSchema = mongoose.Schema({
    title: String,
    description: String,
    content: String,
    urlToImage: String,
})

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    token: String,
    myarticles : [myarticlesSchema]
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel