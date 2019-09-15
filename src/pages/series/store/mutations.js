import * as types from './mutation-types'

export default {
  [types.SET_SERIESLIST] (state, payload) {
    state.seriesList = payload
  }
}
