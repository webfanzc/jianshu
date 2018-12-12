import { GET_ARTICLE_BY_ID, GET_ARTICLE_BY_ID_SUCCESS } from './actionTypes'
export const getArticleByIdAction = id => ({
  type: GET_ARTICLE_BY_ID,
  id
})
export const getArticleByIdSucAction = data => ({
  type: GET_ARTICLE_BY_ID_SUCCESS,
  payload: {
    data
  }
})
