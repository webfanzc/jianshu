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
  cursor: pointer;
`
export const WriterWrapper = styled.div``
export const WriterTitle = styled.div`
  color: #999;
  font-size: 13px;
  height: 20px;
  .icon-spin {
    display: inline-block;
    transition: all 0.3s ease-in-out;
    transform-origin: center center;
    transform: rotate(0deg);
  }
`
export const WriterList = styled.ul``
export const WriterListItem = styled.li`
  margin-top: 15px;
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    float: left;
  }
  div {
    float: left;
    padding-left: 10px;
    span {
      color: #999;
      font-size: 12px;
    }
  }
  .follow {
    float: right;
    color: #42c02e;
    font-weight: bold;
  }
`
export const WriterFindMore = styled.a`
  display: block;
  width: 100%;
  line-height: 36px;
  border: 1px solid #ccc;
  color: #999;
  border-radius: 5px;
  text-align: center;
  margin-top: 20px;
`
export const LoadMore = styled(WriterFindMore)`
  border-radius: 20px;
  background-color: #a5a5a5;
  color: #fff;
`
export const BackToTop = styled.div`
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 24px;
  color: #ccc;
  position: fixed;
  right: 100px;
  bottom: 100px;
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
`
