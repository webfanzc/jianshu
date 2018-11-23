import React, { Component } from 'react'
import { HomeWrapper, HomeContent, HomeAside } from './style'
import { Carousel } from 'element-react'
import banner01 from '../../static/images/banner01.jpg'
import banner02 from '../../static/images/banner02.jpg'
import banner03 from '../../static/images/banner03.jpg'
import banner04 from '../../static/images/banner04.jpg'
import banner05 from '../../static/images/banner05.jpg'
import banner06 from '../../static/images/banner06.jpg'
import banner07 from '../../static/images/banner07.jpg'
import Topic from './components/topic'
import List from './components/list'
import Recommend from './components/recommend'
import Writer from './components/writer'
import { connect } from 'react-redux'
import { store } from './../../store/index'
import {
  getTopicDataAction,
  getListDataAction,
  getRecommendDataAction
} from './store/actionCreators'
class Home extends Component {
  render() {
    const imgArr = [
      banner01,
      banner02,
      banner03,
      banner04,
      banner05,
      banner06,
      banner07
    ]
    const { topicData, listData, recommendData } = this.props
    return (
      <HomeWrapper className="clearfix">
        <HomeContent>
          <Carousel height="270px" className="banner__carousel">
            {imgArr.map(item => (
              <Carousel.Item key={item}>
                <img alt="banner" src={item} />
              </Carousel.Item>
            ))}
          </Carousel>
          <Topic topicData={topicData} />
          <List listData={listData}>123</List>
        </HomeContent>
        <HomeAside>
          <Recommend />
          <Writer>123</Writer>
        </HomeAside>
      </HomeWrapper>
    )
  }
  componentWillMount() {
    store.dispatch(getTopicDataAction())
    store.dispatch(getListDataAction())
    store.dispatch(getRecommendDataAction())
  }
}
const mapStateToProps = state => ({
  topicData: state.getIn(['home', 'topicData']).toJS(),
  listData: state.getIn(['home', 'listData']).toJS()
})

const mapDispatchToProps = dispath => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
