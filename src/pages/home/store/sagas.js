import * as apis from '../../../assets/js/api'
import {
  getTopicDataSucAction,
  getListDataSucAction,
  getRecommendDataSucAction
} from './actionCreators'
import { put, takeEvery } from 'redux-saga/effects'
import {
  GET_TOPIC_DATA,
  GET_LIST_DATA,
  GET_RECOMMEND_DATA
} from './actionTypes'

function* getTopicData() {
  try {
    const res = yield apis.getTopicData()
    const action = getTopicDataSucAction(res.data)
    yield put(action)
  } catch (error) {
    console.log(error, 'getTopicDataError')
  }
}

function* getListData() {
  try {
    const res = yield apis.getListData()
    const action = getListDataSucAction(res.data)
    yield put(action)
  } catch (error) {
    console.log(error, 'getTopicDataError')
  }
}
function* getRecommendData() {
  try {
    const res = yield apis.getRecommendData()
    const action = getRecommendDataSucAction(res.data)
    yield put(action)
  } catch (error) {
    console.log(error, 'getRecommendDataError')
  }
}
export function* watchGetTopicDataSaga() {
  yield takeEvery(GET_TOPIC_DATA, getTopicData)
}
export function* watchGetListDataSaga() {
  yield takeEvery(GET_LIST_DATA, getListData)
}
export function* watchGetRecommendListDataSaga() {
  yield takeEvery(GET_RECOMMEND_DATA, getRecommendData)
}
