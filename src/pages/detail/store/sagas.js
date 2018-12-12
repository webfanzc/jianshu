import { takeEvery, put } from 'redux-saga/effects'
import { GET_ARTICLE_BY_ID } from './actionTypes'
import * as api from '../../../assets/js/api'
import { getArticleByIdSucAction } from './actionCreators'
function* getArticleById(action) {
  try {
    const res = yield api.getArticle('./articleData.json')
    const article = res.data
    const data = article.find(item => item.id === Number(action.id))
    yield put(getArticleByIdSucAction(data))
  } catch (error) {
    console.error(error)
  }
}

export function* watchGetArticleSaga() {
  yield takeEvery(GET_ARTICLE_BY_ID, getArticleById)
}
