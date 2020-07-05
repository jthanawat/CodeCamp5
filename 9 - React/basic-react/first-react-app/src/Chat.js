import React, { Component } from 'react'

export default class Chat extends Component {
state = {
  list: [],
  text: "",


}

  add = () => {
    let list = [...this.state.list, this.state.text]
    // list = ["aaa", "aaa", "aaa", "new text"]
    this.setState({list: list})
    this.setState({text: ""})
  }

  render() {
    return (
      <div style={{marginTop: "40px", height: "300px", margin: "40px auto", width: "300px", backgroundColor: "whitesmoke" }} >
        <div style={{height: "250px"}}>
          <ul style={{listStyle: "none"}}>

            {this.state.list.map( str => <li> {str} </li> )}
          </ul>
        </div>
        <div>
          <input type="text" placeholder="message" value={this.state.text} onChange={(e) => this.setState({text: e.target.value}) } />
          <button onClick={this.state.text.length > 0 ? this.add : null} > send </button>
        </div>
      </div>
    )
  }
}
