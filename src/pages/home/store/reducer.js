import {
  GET_TOPIC_DATA_SUCCESS,
  GET_LIST_DATA_SUCCESS,
  GET_RECOMMEND_DATA_SUCCESS
} from './actionTypes'
import immutable from 'immutable'

const initialState = immutable.fromJS({
  topicData: [],
  listData: [],
  recommendData: []
})

export default (state = initialState, { type, payload }) => {
  console.log(type, payload)
  switch (type) {
    case GET_TOPIC_DATA_SUCCESS:
      return state.set('topicData', payload.data)
    case GET_LIST_DATA_SUCCESS:
      return state.set('listData', payload.data)
    case GET_RECOMMEND_DATA_SUCCESS:
      return state.set('recommendData', payload.data)
    default:
      return state
  }
}
