import React, { PureComponent } from 'react'
import {
  WriterWrapper,
  WriterTitle,
  WriterList,
  WriterListItem,
  WriterFindMore
} from '../style'
import { HotSwitch, Icon } from './../../../common/header/style'
import { connect } from 'react-redux'

class Writer extends PureComponent {
  render() {
    const { switchPage } = this.props
    return (
      <WriterWrapper>
        <WriterTitle>
          热门作者
          <HotSwitch
            onClick={() => {
              switchPage(1, 2, this.spin)
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
        </WriterTitle>
        <WriterList>
          <WriterListItem className="clearfix">
            <a href="http://www.baidu.com">
              <img
                alt=""
                src="//upload.jianshu.io/users/upload_avatars/3627484/eb973bb9-37ba-4d07-acec-850c0a66d1bb.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
              />
            </a>
            <div>
              <a href="http://www.baidu.com">
                <p>简书大学堂</p>
              </a>
              <p>
                <span>写了 47.6k字 138人喜欢</span>
              </p>
            </div>
            <a href="http://www.baidu.com">
              <span className="follow">+关注</span>
            </a>
          </WriterListItem>
          <WriterListItem className="clearfix">
            <a href="http://www.baidu.com">
              <img
                alt=""
                src="//upload.jianshu.io/users/upload_avatars/3627484/eb973bb9-37ba-4d07-acec-850c0a66d1bb.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
              />
            </a>
            <div>
              <a href="http://www.baidu.com">
                <p>简书大学堂</p>
              </a>
              <p>
                <span>写了 47.6k字 138人喜欢</span>
              </p>
            </div>
            <a href="http://www.baidu.com">
              <span className="follow">+关注</span>
            </a>
          </WriterListItem>
          <WriterListItem className="clearfix">
            <a href="http://www.baidu.com">
              <img
                alt=""
                src="//upload.jianshu.io/users/upload_avatars/3627484/eb973bb9-37ba-4d07-acec-850c0a66d1bb.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
              />
            </a>
            <div>
              <a href="http://www.baidu.com">
                <p>简书大学堂</p>
              </a>
              <p>
                <span>写了 47.6k字 138人喜欢</span>
              </p>
            </div>
            <a href="http://www.baidu.com">
              <span className="follow">+关注</span>
            </a>
          </WriterListItem>
          <WriterListItem className="clearfix">
            <a href="http://www.baidu.com">
              <img
                alt=""
                src="//upload.jianshu.io/users/upload_avatars/3627484/eb973bb9-37ba-4d07-acec-850c0a66d1bb.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
              />
            </a>
            <div>
              <a href="http://www.baidu.com">
                <p>简书大学堂</p>
              </a>
              <p>
                <span>写了 47.6k字 138人喜欢</span>
              </p>
            </div>
            <a href="http://www.baidu.com">
              <span className="follow">+关注</span>
            </a>
          </WriterListItem>
          <WriterListItem className="clearfix">
            <a href="http://www.baidu.com">
              <img
                alt=""
                src="//upload.jianshu.io/users/upload_avatars/3627484/eb973bb9-37ba-4d07-acec-850c0a66d1bb.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
              />
            </a>
            <div>
              <a href="http://www.baidu.com">
                <p>简书大学堂</p>
              </a>
              <p>
                <span>写了 47.6k字 138人喜欢</span>
              </p>
            </div>
            <a href="http://www.baidu.com">
              <span className="follow">+关注</span>
            </a>
          </WriterListItem>
          <WriterFindMore>查看更多</WriterFindMore>
        </WriterList>
      </WriterWrapper>
    )
  }
}
const mapStateToProps = state => ({})

const mapDispatchToProps = dispath => ({
  switchPage(page, totalPage, spin) {
    console.log(spin)
    const originAngel =
      (/\d+/gi.exec(spin.style.transform) &&
        /\d+/gi.exec(spin.style.transform)[0]) ||
      ''
    spin.style.transform = `rotate(${+originAngel + 720}deg)`
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Writer)
