import * as types from './mutation-types'

export default {
  [types.SET_WATCHLIST] (state, payload) {
    state.watchlist = payload
  }
}
