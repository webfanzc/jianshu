import React, { PureComponent } from 'react'
import { TopicWrapper, TopicList, TopicItem } from '../style'
import { connect } from 'react-redux'

class Topic extends PureComponent {
  render() {
    const { topicData } = this.props

    return (
      <TopicWrapper>
        <TopicList className="clearfix">
          {topicData.map(item => (
            <TopicItem key={item.text} className="clearfix">
              <a href="//www.baidu.com">
                <img alt="subImg" src={item.path} />
                {item.text}
              </a>
            </TopicItem>
          ))}
          <a href="//www.baidu.com" className="fr">
            更多热门专题>
          </a>
        </TopicList>
      </TopicWrapper>
    )
  }
}
const mapStateToProps = state => ({
  topicData: state.getIn(['home', 'topicData']).toJS()
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topic)
