import services from '@/http'
import * as types from './mutation-types'

export const ActionFindWatchedlist = ({ commit }) => (
  services.watchedlist.findWatchedlist().then(res => {
    commit(types.SET_WATCHEDLIST, res.data.data)
  })
)
