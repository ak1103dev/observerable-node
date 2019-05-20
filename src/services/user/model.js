const mongoose = require('mongoose')
const config = require('config')

mongoose.connect(config.get('mongodb.url'), {useNewUrlParser: true})

const { Schema } = mongoose

const schema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
  password: String,
})

module.exports = mongoose.model('User', schema)
