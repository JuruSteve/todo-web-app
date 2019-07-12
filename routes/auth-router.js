const router = require('express').Router()

// Register route
router.post('/register',(req, res)=>{
    res.send('Register page')
})

// Login route
router.post('/login',(req, res)=>{
    res.send('Login page')
})

module.exports = router;