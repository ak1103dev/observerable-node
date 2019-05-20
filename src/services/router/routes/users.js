const { Router } = require('express')
const { create } = require('../../user')
// const auth = require('../utils/auth')
// const user = require('../services/user')

const router = Router();

router.get('/me', (req, res) => {
  res.send('jwt')
})

router.post('/', async (req, res) => {
  const value = req.body
  const user = await create(value)
  res.send(user)
})

router.post('/login', (req, res) => {
  res.send('jwt')
})

module.exports = router;
