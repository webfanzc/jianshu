import React, { Component } from 'react'
import { RecommendWrapper, RecommendList, RecommendListItem } from '../style'
import { connect } from 'react-redux'

class Recommend extends Component {
  render() {
    const { list } = this.props
    return (
      <RecommendWrapper>
        <RecommendList>
          {list.map(item => {
            return <RecommendListItem key={item.id} imgURL={item.path} />
          })}
        </RecommendList>
      </RecommendWrapper>
    )
  }
}
const mapStateToProps = state => ({
  list: state.getIn(['home', 'recommendData']).toJS()
})

const mapDispatchToProps = dispatch => ({})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recommend)
