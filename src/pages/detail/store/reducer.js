import immutable from 'immutable'
import { GET_ARTICLE_BY_ID_SUCCESS } from './actionTypes'

const initialState = immutable.fromJS({
  article: {
    title: '',
    content: '',
    author: '',
    authorHeadImg: '',
    like: '',
    count: '',
    read: '',
    reward: '',
    comment: ''
  }
})

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ARTICLE_BY_ID_SUCCESS:
      return state.set('article', immutable.fromJS(payload.data))
    default:
      return state
  }
}
