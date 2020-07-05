import React, { Component } from 'react'
import ChildClassComponent from '../src/ChildClassComponent'
import ChildFuncComponent from '../src/ChildFuncComponent'

export default class ParentComponent extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <div>
        <ChildClassComponent data="Data send to class component edit...." color="red" />
        <ChildFuncComponent data="Data send to function component" color="green" />
      </div>
    ) 
  }
}


