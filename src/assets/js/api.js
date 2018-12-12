import Axios from 'axios'

export const getInitList = async () => await Axios.get('/api/hotList.json')

export const getHomeData = async () => await Axios.get('/api/homeData.json')

export const getMoreList = async () => await Axios.get('/api/moreData.json')

export const getArticle = async () => await Axios.get('/api/articleData.json')
