import JWT from 'jsonwebtoken'

const users = require('../../__mocks__/users.json')
const SECRET = 'TEST'

export default {
  authenticate (req, res) {
    const { email, password } = req.body

    const user = users.filter(user => (
      user.email === email && user.password === password
    ))[0]

    if (user) {
      const token = JWT.sign(user, SECRET, {
        expiresIn: 7200
      })

      res.status(200).send({ message: 'Login efetuado com sucesso', token, user })

      return
    }

    res.status(500).send({ message: 'Não foi possível fazer o login, cheque seu e-mail e senha' })
  },

  validateSession (req, res, next) {
    const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null

    if (!token) {
      res.status(401).send({ message: 'Sua sessão é inválida ou está expirada' })
      return
    }

    JWT.verify(token, SECRET, (err, decoded) => {
      if (err) {
        res.status(401).send({ message: 'Sua sessão é inválida ou está expirada' })
      }

      req.data = decoded

      next()
    })
  },

  loadSession (req, res) {
    const token = req.headers.authorization.split(' ')[1]

    JWT.verify(token, SECRET, (err, decoded) => {
      if (err) {
        res.status(401).send({ message: 'Sua sessão é inválida ou está expirada' })
        return
      }

      res.status(200).send({
        token,
        user: decoded
      })
    })
  }
}
