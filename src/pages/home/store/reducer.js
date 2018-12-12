import {
  GET_HOME_DATA_SUCCESS,
  GET_MORE_LIST_SUCCESS,
  CHANGE_BACK_TO_TOP_STATE
} from './actionTypes'
import immutable from 'immutable'

const initialState = immutable.fromJS({
  topicData: [],
  listData: [],
  recommendData: [],
  showBackToTop: false
})

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_HOME_DATA_SUCCESS:
      return state.merge({
        topicData: immutable.fromJS(payload.data.topicData),
        listData: immutable.fromJS(payload.data.listData),
        recommendData: immutable.fromJS(payload.data.recommendData)
      })
    case GET_MORE_LIST_SUCCESS:
      return state.set(
        'listData',
        state.get('listData').concat(immutable.fromJS(payload.data))
      )
    case CHANGE_BACK_TO_TOP_STATE:
      return state.set('showBackToTop', payload.state)
    default:
      return state
  }
}
