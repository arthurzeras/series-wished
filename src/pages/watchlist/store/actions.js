import services from '@/http'
import * as types from './mutation-types'

export const ActionFindWatchlist = ({ commit }) => (
  services.watchlist.findWatchlist().then(res => {
    commit(types.SET_WATCHLIST, res.data.data)
  })
)
