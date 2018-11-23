import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  Icon,
  SearchWrapper,
  SearchHot,
  HotTitle,
  HotSwitch,
  HotList,
  HotListItem
} from './style.jsx'
import { actionCreators } from './store'

class Header extends Component {
  render() {
    const { focused, changeFocusState, hotList, mouseIn } = this.props
    return (
      <HeaderWrapper>
        <Logo href="/" />
        <Nav>
          <NavItem className="left active">
            <Icon className="iconfont icon-daohanglaiyuan" />
            首页
          </NavItem>
          <NavItem className="left">
            <Icon className="iconfont icon-ai231" />
            下载App
          </NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">Aa</NavItem>
          <SearchWrapper>
            <NavSearch
              placeholder="搜索"
              className={focused ? 'focusedInput' : ''}
              onFocus={() => {
                changeFocusState(true, hotList)
              }}
              onBlur={() => {
                changeFocusState(false)
              }}
            />
            <Icon
              className={`iconfont icon-sousuo ${focused ? 'focusedIcon' : ''}`}
            />
            {(focused || mouseIn) && this.getHotArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="sign-up">注册</Button>
          <Button className="write">
            <Icon className="iconfont icon-xiezi" />
            写文章
          </Button>
        </Addition>
      </HeaderWrapper>
    )
  }
  getHotArea = () => {
    const {
      changeMouseInState,
      switchPage,
      hotList,
      page,
      totalPage
    } = this.props
    return (
      <SearchHot
        onMouseEnter={() => {
          changeMouseInState(true)
        }}
        onMouseLeave={() => {
          changeMouseInState(false)
        }}
      >
        <HotTitle>
          热门搜索
          <HotSwitch
            onClick={() => {
              switchPage(page, totalPage, this.spin)
            }}
          >
            <Icon
              className="iconfont icon-spin"
              ref={spin => {
                this.spin = spin
              }}
            />
            换一批
          </HotSwitch>
        </HotTitle>
        <HotList>
          {hotList.slice((page - 1) * 10, page * 10).map((item, index) => {
            return (
              <HotListItem key={index}>
                <span>{item}</span>
              </HotListItem>
            )
          })}
        </HotList>
      </SearchHot>
    )
  }
}

const mapStateToProps = state => ({
  focused: state.getIn(['header', 'focused']),
  hotList: state.getIn(['header', 'hotList']),
  firstFetch: state.getIn(['header', 'firstFetch']),
  page: state.getIn(['header', 'page']),
  totalPage: state.getIn(['header', 'totalPage']),
  mouseIn: state.getIn(['header', 'mouseIn'])
})

const mapDispatchToProps = dispatch => ({
  changeFocusState(state, list) {
    if (state && !list.size) {
      dispatch(actionCreators.getHotListAction())
    }
    dispatch(actionCreators.changeInputFocusStateAction(state))
  },
  switchPage(page, total, spin) {
    const originAngel =
      (/\d+/gi.exec(spin.style.transform) &&
        /\d+/gi.exec(spin.style.transform)[0]) ||
      ''
    spin.style.transform = `rotate(${+originAngel + 720}deg)`
    dispatch(actionCreators.changeHotListPage(page < total ? page + 1 : 1))
  },
  changeMouseInState(state) {
    dispatch(actionCreators.changeMouseInStateAction(state))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
