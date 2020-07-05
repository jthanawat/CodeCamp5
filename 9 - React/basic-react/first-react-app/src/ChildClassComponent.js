import React, { Component } from 'react'

export default class ChildClassComponent extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    const {data, color} = this.props
    const size = "24px"
    const style = {
      color: color,
      fontSize: size
    }

    return (
      <div>
        this is props from parent element <span style={style}> {data} </span>
      </div>
    )
  }
}


