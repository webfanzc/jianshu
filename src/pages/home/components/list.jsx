import React, { PureComponent } from 'react'
import { ListWrapper, ListItem, LoadMore } from '../style'
import { connect } from 'react-redux'
import { getMoreListAction } from './../store/actionCreators'
import { Link } from 'react-router-dom'
class List extends PureComponent {
  render() {
    const { listData, getMoreList } = this.props

    return (
      <ListWrapper>
        <ul>
          {listData.map((item, index) => (
            <Link key={index} to={`/detail/${item.id}`}>
              <ListItem>
                <div className="listinfo">
                  <h3>{item.title}</h3>
                  <p>{item.desc + '...'}</p>
                </div>
                <img src={item.path} alt="desc" />
              </ListItem>
            </Link>
          ))}
        </ul>
        <LoadMore
          onClick={() => {
            getMoreList()
          }}
        >
          阅读更多
        </LoadMore>
      </ListWrapper>
    )
  }
}

const mapStateToProps = state => ({
  listData: state.getIn(['home', 'listData']).toJS()
})

const mapDispatchToProps = dispath => ({
  getMoreList() {
    dispath(getMoreListAction())
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
