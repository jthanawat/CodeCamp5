import React, { Component } from 'react'

export default class counter extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      text: ""
    }
  }

  Increment = () => {
    this.setState({ value: this.state.value + 1 })
  }

  Decrement = () => {
    this.setState({ value: this.state.value - 1 })
  }

  Reset = () => {
    this.setState({ value: 0 })
  }

  input = (e) => {
    e.preventDefault()
    this.setState({ text: e.target.value})
  }
  
  render() {

    return (
      <div>
        <p style={{ fontSize: "45px" }}> count: {this.state.text} </p>

        <br />
        <button onClick={this.Increment}>Increment</button> &nbsp;
        <button onClick={this.Decrement}>Decrement</button> &nbsp;
        <button onClick={this.Reset}>Reset</button> &nbsp;
      </div>
    )
  }
}
