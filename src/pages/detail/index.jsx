import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { store } from './../../store/index'
import {
  DetailWrapper,
  ArticleTitle,
  ArticleAuthor,
  ArticleContent
} from './style'
import { getArticleByIdAction } from './store/actionCreators'

export class Detail extends PureComponent {
  componentDidMount() {
    const id = this.props.match.params.id
    store.dispatch(getArticleByIdAction(id))
  }
  render() {
    const { article } = this.props
    return (
      <DetailWrapper>
        <ArticleTitle>{article.get('title')}</ArticleTitle>
        <ArticleAuthor>
          <a href="//www.baidu.com">
            <img src={article.get('authorHeadImg')} alt="1" />
          </a>
          <div>
            <span>{article.get('author')}</span>
            <a href="//www.baidu.com" className="follow">
              +关注
            </a>
            <div className="articleMeta">
              {`${article.get('date')} 字数 ${article.get(
                'count'
              )} 阅读 ${article.get('read')} 评论 ${article.get(
                'comment'
              )} 喜欢 ${article.get('like')} 赞赏 ${article.get('reward')}`}
            </div>
          </div>
        </ArticleAuthor>
        <ArticleContent
          dangerouslySetInnerHTML={{ __html: article.get('content') }}
        />
      </DetailWrapper>
    )
  }
}

const mapStateToProps = state => ({
  article: state.getIn(['detail', 'article'])
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail)
