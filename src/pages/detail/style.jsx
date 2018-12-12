import styled from 'styled-components'
export const DetailWrapper = styled.div`
  width: 620px;
  margin: 0 auto;
`
export const ArticleTitle = styled.h1`
  font-size: 34px;
  text-align: center;
  margin: 50px 0 20px 0;
  font-weight: bold;
`
export const ArticleAuthor = styled.div`
  img {
    width: 48px;
    height: 48px;
    margin-right: 10px;
    border-radius: 50%;
    float: left;
    border: 1px solid #ccc;
  }
  .follow {
    padding: 0 8px;
    margin: 0 0 0 10px;
    border-radius: 40px;
    background: #42c02e;
    color: #fff;
  }
  .articleMeta {
    color: #999;
    font-size: 12px;
    margin-top: 5px;
  }
`
export const ArticleContent = styled.div`
  margin-top: 50px;
  line-height: 2;
`
