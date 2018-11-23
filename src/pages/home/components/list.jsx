import React, { Component } from 'react'
import { ListWrapper, ListItem } from '../style'

export default class List extends Component {
  render() {
    const { listData } = this.props

    return (
      <ListWrapper>
        <ul>
          {listData.map(item => (
            <ListItem key={item.id}>
              <div className="listinfo">
                <h3>{item.title}</h3>
                <p>{item.desc + '...'}</p>
              </div>
              <img src={item.path} alt="desc" />
            </ListItem>
          ))}
        </ul>
      </ListWrapper>
    )
  }
}
