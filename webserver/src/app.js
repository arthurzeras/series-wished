import Cors from 'cors'
import Express from 'express'
import Routes from './routes'
import BodyParser from 'body-parser'

const App = Express()

App.use(Cors())
App.use(BodyParser.urlencoded({ extended: false }))
App.use(BodyParser.json())

Routes(App)

App.use((req, res, next) => {
  res.status(404).send({ error: '404 - Not found' })
})

const PORT = process.env.PORT || 5000

App.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))