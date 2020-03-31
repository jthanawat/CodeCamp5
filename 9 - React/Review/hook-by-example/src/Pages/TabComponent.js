import React, { Component } from 'react'

export default class TabComponent extends Component {
  state = {
    currentTab: this.props.defaultMenu
  }

  setCurrentTab = menu => {
    this.setState({
      currentTab: menu
    })
  }

  renderTabList = () => {
    return this.props.children.map(children => (
      <button type="button" class="btn btn-light" onClick={() => { this.setCurrentTab(children.props.title) }}>
        {children.props.title}
      </button>
      ))
  }

  renderCurrentTab = () => {
    let result = <h1> Error Not Found 404 </h1>;
    this.props.children.forEach(children => {
      
    })
  }

  render() {


    return (
      <div>

      </div>
    )
  }
}
