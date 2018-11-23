import {
  GET_TOPIC_DATA,
  GET_TOPIC_DATA_SUCCESS,
  GET_LIST_DATA,
  GET_LIST_DATA_SUCCESS,
  GET_RECOMMEND_DATA,
  GET_RECOMMEND_DATA_SUCCESS
} from './actionTypes'
import { fromJS } from 'immutable'

export const getTopicDataAction = () => ({
  type: GET_TOPIC_DATA
})

export const getTopicDataSucAction = data => ({
  type: GET_TOPIC_DATA_SUCCESS,
  payload: {
    data: fromJS(data)
  }
})
export const getListDataAction = () => ({
  type: GET_LIST_DATA
})
export const getListDataSucAction = data => ({
  type: GET_LIST_DATA_SUCCESS,
  payload: {
    data: fromJS(data)
  }
})
export const getRecommendDataAction = () => ({
  type: GET_RECOMMEND_DATA
})
export const getRecommendDataSucAction = data => ({
  type: GET_RECOMMEND_DATA_SUCCESS,
  payload: {
    data: fromJS(data)
  }
})
