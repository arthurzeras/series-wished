import AuthController from './controllers/AuthController'
import UsersController from './controllers/UsersController'
import SeriesController from './controllers/SeriesController'

export default function (App) {
  App.get('/', (req, res) => {
    res.status(200).send({ message: 'Welcome to Node.js API 😁' })
  })

  App.post('/login', AuthController.authenticate)
  App.get('/load-session', AuthController.validateSession, AuthController.loadSession)

  App.get('/users/:id/watchlist', AuthController.validateSession, UsersController.watchlist)
  App.get('/users/:id/watched', AuthController.validateSession, UsersController.watchedlist)

  App.get('/user/watchlist', AuthController.validateSession, UsersController.watchlistUserLogged)
  App.get('/user/watchedlist', AuthController.validateSession, UsersController.watchedlistUserLogged)
  App.post('/user/serie/watchlist', AuthController.validateSession, UsersController.addSerieWatchlist)
  App.delete('/user/serie/watchlist/:id', AuthController.validateSession, UsersController.removeSerieWatchlist)
  App.post('/user/serie/watched', AuthController.validateSession, UsersController.addSerieWatchedlist)
  App.delete('/user/serie/watched/:id', AuthController.validateSession, UsersController.removeSerieWatchedlist)

  App.get('/serie', AuthController.validateSession, SeriesController.list)
  App.post('/serie', AuthController.validateSession, SeriesController.create)
  App.get('/serie/:id', AuthController.validateSession, SeriesController.find)
  App.put('/serie/:id', AuthController.validateSession, SeriesController.update)
  App.delete('/serie/:id', AuthController.validateSession, SeriesController.delete)
}
