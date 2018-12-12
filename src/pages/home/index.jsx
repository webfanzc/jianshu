import React, { PureComponent } from 'react'
import { HomeWrapper, HomeContent, HomeAside, BackToTop } from './style'
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
  getHomeDataAction,
  changeBackToTopStateAction
} from './store/actionCreators'
import { debounce } from '../../assets/js/util'
class Home extends PureComponent {
  changeScrollState = () => {
    return debounce(() => {
      const { showBackToTop } = this.props
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop

      if (scrollTop > window.innerHeight && !showBackToTop) {
        store.dispatch(changeBackToTopStateAction(true))
      }
      if (scrollTop < window.innerHeight && showBackToTop) {
        store.dispatch(changeBackToTopStateAction(false))
      }
    }, 100)
  }
  watchScroll = showBackToTop => {
    window.addEventListener('scroll', this.changeScrollState())
  }
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
    const { showBackToTop, scrollTo } = this.props
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
          <Topic />
          <List />
        </HomeContent>
        <HomeAside>
          <Recommend />
          <Writer />
        </HomeAside>
        {showBackToTop && (
          <BackToTop
            onClick={() => {
              scrollTo(0, 300)
            }}
          >
            ^
          </BackToTop>
        )}
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.getHomeData()
    this.watchScroll()
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.changeScrollState())
  }
}
const mapStateToProps = state => ({
  showBackToTop: state.getIn(['home', 'showBackToTop'])
})

const mapDispatchToProps = dispath => ({
  getHomeData() {
    store.dispatch(getHomeDataAction())
  },
  scrollTo(position, timeout) {
    let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop,
      direction = position - scrollTop > 0 ? 1 : -1,
      distance = Math.abs(position - scrollTop),
      split = distance / 50,
      _timeout

    if (position !== scrollTop) {
      timeout = timeout || 1000
      split *= direction

      _timeout = setInterval(function() {
        scrollTop += split
        distance -= Math.abs(split)
        if (0 >= distance) {
          window.scrollTo(0, position)
          clearInterval(_timeout)
          _timeout = null
        } else {
          window.scrollTo(0, scrollTop)
        }
      }, timeout / 100)
    }
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
