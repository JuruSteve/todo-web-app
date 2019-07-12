const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const UserModel = require('../models/user-model')
const secrets = require('../api/config')

exports.register =  async (req, res)=>{
    try {
        const user = req.body;

        // hash the password
        const hash =  bcrypt.hashSync(user.password, 10);
        user.password = hash;
        
        const addedUser = await UserModel.add(user)

        // generate token and send it to front-end
        const token = generateToken(user)
        
        res.status(201).json({message: 'User added', result: addedUser.affectedRows, token})    
    } catch (error) {
        res.status(500).json(error)
    }

}

exports.login =  async (req, res) => {
      try {
        let { username, password } = req.body
        
        // Find user
        const [user] = await UserModel.findBy(username)

        // Verify the user's password and generate a token
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user)
          res.status(200).json({ message: `Welcome ${user.username}`, token })
        } else {
          res.status(401).json({ message: `Unable to Login` })
        }
      } catch (error) {
        res.status(500).json(error)
      }
    }

function generateToken (user) {
  const payload = {
    subject: user.id,
    username: user.username
  }

  const options = {
    expiresIn: '1h'
  }

  return jwt.sign(payload, secrets.jwtSecret, options)
}