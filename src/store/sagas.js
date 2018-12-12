import { headerSagas } from '../common/header/store'
import { homeSagas } from '../pages/home/store'
import { detailSagas } from '../pages/detail/store'
import { genRoot } from '../assets/js/util'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all(genRoot({ headerSagas, homeSagas, detailSagas }))
}
