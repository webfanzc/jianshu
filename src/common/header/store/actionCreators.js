import {
  CHANGE_INPUT_FOCUS_STATE,
  GET_HOT_LIST,
  GET_HOT_LIST_SUCCESS,
  CHANGE_HOTLIST_PAGE,
  CHANGE_MOUSEIN_STATE
} from './actionTypes'
import { fromJS } from 'immutable'
export const changeInputFocusStateAction = state => ({
  type: CHANGE_INPUT_FOCUS_STATE,
  payload: {
    state
  }
})
export const getHotListAction = () => ({
  type: GET_HOT_LIST
})
export const getHotListSuccessAction = list => ({
  type: GET_HOT_LIST_SUCCESS,
  payload: {
    list: fromJS(list),
    totalPage: Math.ceil(list.length / 10)
  }
})
export const changeHotListPage = page => ({
  type: CHANGE_HOTLIST_PAGE,
  payload: {
    page
  }
})
export const changeMouseInStateAction = state => ({
  type: CHANGE_MOUSEIN_STATE,
  payload: {
    state
  }
})
