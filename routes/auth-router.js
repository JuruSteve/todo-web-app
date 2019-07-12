const router = require('express').Router()
const auth = require('../controllers/auth')
// Register route
router.post('/register',auth.register)

// Login route
router.post('/login', auth.login)

module.exports = router;