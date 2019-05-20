const User = require('./model')

const create = (data) => {
  const user = new User(data)
  return user.save()
}

const login = (credentials) => {
  return credentials
}

module.exports = {
  create,
  login,
}