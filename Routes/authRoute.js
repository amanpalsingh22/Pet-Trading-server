const router = require('express').Router()
const authController = require('../Controllers/authController')

router.post('/api/auth/signup', authController.handleSignup)
router.post('/api/auth/login', authController.handleLogin)

module.exports = router
