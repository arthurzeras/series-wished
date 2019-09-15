import * as types from './mutation-types'

export default {
  [types.SET_WATCHEDLIST] (state, payload) {
    state.watchedlist = payload
  }
}
