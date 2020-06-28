import React, { Component } from 'react'

// function ChildFuncComponent (props) {
const ChildFuncComponent = (props) => {
  let { data, color } = props
  // props = {data: "....", color: "...."}
  // Destructuring
  // let {data, color} = props | equal to props.data and props.color
  // data = props.data = value ของ data ใน props
  // color = props.color = value ของ color ใน props

  return (
    <div>
      this is props from parent element <span style={{ color: color }}> {data} </span>
    </div>
  )
}

export default ChildFuncComponent;

