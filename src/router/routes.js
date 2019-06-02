import { routes as home } from '../pages/home'
import { routes as auth } from '../modules/auth'

export default [
  ...auth,
  ...home
]
