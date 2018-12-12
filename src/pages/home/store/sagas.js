import * as apis from '../../../assets/js/api'
import { getHomeDataSucAction, getMoreListSuccess } from './actionCreators'
import { put, takeEvery } from 'redux-saga/effects'
import { GET_HOME_DATA, GET_MORE_LIST } from './actionTypes'

function* getHomeData() {
  try {
    const res = yield apis.getHomeData()
    const action = getHomeDataSucAction(res.data)
    yield put(action)
  } catch (error) {
    console.log(error, 'getHomeDataError')
  }
}
function* getMoreData() {
  try {
    const res = yield apis.getMoreList()
    const action = getMoreListSuccess(res.data)
    yield put(action)
  } catch (error) {
    console.log(error, 'getMoreDataError')
  }
}
export function* watchHomeDataSaga() {
  yield takeEvery(GET_HOME_DATA, getHomeData)
}
export function* watchMoreDataSaga() {
  yield takeEvery(GET_MORE_LIST, getMoreData)
}
