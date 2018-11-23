import Axios from 'axios'

export const getInitList = async () => {
  const res = await Axios.get('/hotList')
  return res
}
export const getTopicData = async () => {
  const res = await Axios.get('/topicList')
  return res
}
export const getListData = async () => {
  const res = await Axios.get('/listData')
  return res
}
export const getRecommendData = async () => {
  const res = await Axios.get('/recommendData')
  return res
}
