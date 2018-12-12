import {
  GET_HOME_DATA,
  GET_HOME_DATA_SUCCESS,
  GET_MORE_LIST,
  GET_MORE_LIST_SUCCESS,
  CHANGE_BACK_TO_TOP_STATE
} from './actionTypes'

export const getHomeDataAction = () => ({
  type: GET_HOME_DATA
})
export const getHomeDataSucAction = data => ({
  type: GET_HOME_DATA_SUCCESS,
  payload: {
    data
  }
})
export const getMoreListAction = () => ({
  type: GET_MORE_LIST
})
export const getMoreListSuccess = data => ({
  type: GET_MORE_LIST_SUCCESS,
  payload: {
    data
  }
})
export const changeBackToTopStateAction = state => ({
  type: CHANGE_BACK_TO_TOP_STATE,
  payload: {
    state
  }
})
