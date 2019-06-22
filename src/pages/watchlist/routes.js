export default [
  {
    name: 'watchlist',
    path: '/watchlist',
    component: () => import(/* webpackChunkName: "watchlist" */ './Watchlist')
  }
]
