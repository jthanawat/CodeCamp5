import React, { Component } from 'react'



export default class ComponentClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Peter",
      lateName: "Pan",
      age: "16",
      color: true,
      list: [
        { content: "aaa", score: 1 },
        { content: "bbb", score: 2 },
        { content: "ccc", score: 3 },
        { content: "ddd", score: 4 },
        { content: "eee", score: 5 }
      ],

      // list: ["list 1", "list 2", "list 3", "list 4", "list 5"],
    }
  }

  render() {
    return (
      <div>
        <img src="" />
        this is component for reuse.
        <p onClick={() => this.state.color ? this.setState({ color: false }) : this.setState({ color: true })}
          style={{ color: this.state.color ? "inherit" : "blue" }}> My name is {this.state.name} {this.state.lateName} I'm {this.state.age}</p>

        {this.state.list.map(obj => <li> {obj.content} score: {obj.score} </li>)}

        <button onClick={() => this.setState({ name: prompt("what's your name?") })}> edit name </button>
        {/* // <ul>
        //   {this.state.list.map(ele => <li> {ele} </li>)}
        // </ul> */}
      </div>
    )
  }
}



