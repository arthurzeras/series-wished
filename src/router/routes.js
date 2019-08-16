import { routes as home } from '../pages/home'
import { routes as auth } from '../modules/auth'
import { routes as watchlist } from '../pages/watchlist'
import { routes as showSerie } from '../pages/show-serie'

export default [
  ...auth,
  ...home,
  ...showSerie,
  ...watchlist
]
