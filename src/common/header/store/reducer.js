import {
  CHANGE_INPUT_FOCUS_STATE,
  GET_HOT_LIST_SUCCESS,
  CHANGE_HOTLIST_PAGE,
  CHANGE_MOUSEIN_STATE
} from './actionTypes'
// import { deepCopy } from './../../../assets/js/util'
import immutable from 'immutable'

const initialState = immutable.fromJS({
  focused: false,
  hotList: [],
  mouseIn: false,
  totalPage: 1,
  page: 1
})

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_INPUT_FOCUS_STATE:
      return state.set('focused', payload.state)
    case GET_HOT_LIST_SUCCESS:
      return state.merge({
        hotList: immutable.fromJS(payload.list),
        totalPage: payload.totalPage
      })
    case CHANGE_HOTLIST_PAGE:
      return state.set('page', payload.page)
    case CHANGE_MOUSEIN_STATE:
      return state.set('mouseIn', payload.state)
    default:
      return state
  }
}
