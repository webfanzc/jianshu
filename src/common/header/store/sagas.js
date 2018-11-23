import { takeEvery, put } from 'redux-saga/effects'
import { GET_HOT_LIST } from '../../../common/header/store/actionTypes'
import * as api from '../../../assets/js/api'
import { actionCreators } from '../../../common/header/store'
function* getHotList() {
  try {
    const res = yield api.getInitList()
    const action = actionCreators.getHotListSuccessAction(res.data)
    yield put(action)
  } catch (error) {
    console.log('getInitList', error)
  }
}

export function* watchGetHotList() {
  yield takeEvery(GET_HOT_LIST, getHotList)
}
