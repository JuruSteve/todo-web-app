const jwt = require('jsonwebtoken');
const secrets = require('../api/config')

module.exports = (req, res, next) => {
  const token = req.headers.authorization

  jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
    if (err) {
      res.status(401).json({ message: 'Unable to proceed' })
    } else {
      req.decodedToken = decodedToken
      next()
    }
  })
}