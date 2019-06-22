import { routes as home } from '../pages/home'
import { routes as auth } from '../modules/auth'
import { routes as watchlist } from '../pages/watchlist'

export default [
  ...auth,
  ...home,
  ...watchlist
]
