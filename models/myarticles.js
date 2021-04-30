const mongoose = require('mongoose')

const myarticlesSchema = mongoose.Schema({
    title: String,
    description: String,
    content: String,
    urlToImage: String,
})

const myarticlesModel = mongoose.model('myarticles', myarticlesSchema)

module.exports = myarticlesModel