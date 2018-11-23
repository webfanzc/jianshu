import styled from 'styled-components'

export const HomeWrapper = styled.div`
  height: 800px;
  width: 960px;
  margin: 0 auto;
`
export const HomeContent = styled.main`
  float: left;
  width: 640px;
  padding-top: 30px;
  padding-left: 15px;
  .banner__carousel {
    border-radius: 5px;
    margin-bottom: 35px;
  }
`
export const HomeAside = styled.aside`
  float: left;
  padding-top: 30px;
  margin-left: 40px;
  width: 280px;
`
// Topic组件部分样式
export const TopicWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #dcdcdc;
`
export const TopicList = styled.ul`
  line-height: 34px;
  .fr {
    float: left;
    color: #666;
  }
`
export const TopicItem = styled.li`
  float: left;
  height: 34px;
  border: 1px solid #dcdcdc;
  margin: 0 18px 18px 0;
  border-radius: 5px;
  img {
    height: 100%;
    vertical-align: top;
  }
`
// List部分列表制作
export const ListWrapper = styled.article`
  padding: 20px 0;
`
export const ListItem = styled.li`
  padding: 20px 0;
  position: relative;
  height: 140px;
  margin-bottom: 20px;
  .listinfo {
    float: left;
    padding-right: 140px;
  }
  img {
    position: absolute;
    right: 0;
    float: right;
    top: 20px;
    height: 100px;
    border-radius: 5px;
  }
  h3 {
    font-size: 20px;
    font-weight: bold;
  }
  p {
    color: #666;
    font-size: 12px;
  }
`
// recommend 部分
export const RecommendWrapper = styled.div``
export const RecommendList = styled.ul``
export const RecommendListItem = styled.li`
  margin: 10px 0;
  height: 50px;
  background: url(${props => props.imgURL}) center center / cover;
`
