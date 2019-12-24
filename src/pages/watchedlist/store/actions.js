import services from '@/http'
import * as types from './mutation-types'

export const ActionFindWatchedlist = ({ commit }) => (
  services.watchedlist.findWatchedlist().then(res => {
    commit(types.SET_WATCHEDLIST, res.data.data)
  })
)

export const ActionAddOnWatchedlist = (context, payload) => (
  services.watchedlist.addOnWatchedlist(payload)
)

export const ActionDeleteFromWatchedlist = (context, payload) => (
  services.watchedlist.deleteFromWatchedlist({ id: payload })
)
