import React, { Component } from 'react'

export default class TodoList extends Component {
  state = {
    todo: [],
    complete: [],
    text: ""
  }

  addTodo = () => {
    this.setState({ todo: [...this.state.todo, this.state.text], text: "" })
  }

  edit = (idx) => {
    let list = [...this.state.todo]
    let editText = prompt("New name")

    if (editText === null || editText === undefined || editText === false) {
      return null
    } else { list.splice(idx, 1, editText) }
    this.setState({ todo: list })
  }

  move = (idx) => {
    let list = [...this.state.todo]
    this.setState({ complete: [...this.state.complete, list.splice(idx, 1)], todo: list })
  }

  reverse = (idx) => {
    let list = [...this.state.complete]
    this.setState({ todo: [...this.state.todo, list.splice(idx, 1)], complete: list })
  }

  delete = (idx) => {
    let list = [...this.state.complete]
    list.splice(idx, 1)
    this.setState({ complete: list })
  }


  render() {
    return (
      <div style={{ margin: "50px auto", display: "grid", gridTemplateColumns: "50% 50%", width: "600px", justifyContent: "center", gridColumnGap: "10px", height: "400px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "column", width: "100%", backgroundColor: "whitesmoke" }}>
          <div>
            <div style={{ width: "100%", background: "grey" }}>TodoList</div>
            <ul className="todolist" style={{ listStyle: "none" }}>
              {this.state.todo.map((ele, idx) =>
                <li>
                  <span onClick={() => this.edit(idx)} > {ele} </span>
                  <span className="next" onClick={() => this.move(idx)}> ▶️ </span>
                </li>)}
            </ul>
          </div>
          <div>
            <input type="text" placeholder="message" value={this.state.text} onChange={(e) => { this.setState({ text: e.target.value }) }}></input>
            <button onClick={this.state.text.length > 0 && this.addTodo}>Add</button>
          </div>
        </div>
        <div style={{ backgroundColor: "wheat", height: "100%", width: "100%" }}>
          <div style={{ width: "100%", background: "grey" }}> Completed </div>
          <ul className="todolist" style={{ listStyle: "none" }}>
            {this.state.complete.map((ele, idx) =>
              <li>
                <span onClick={() => this.reverse(idx)}> {ele} </span>
                <input type="button" onClick={() => this.delete(idx)} className="del" value="x" />
              </li>)}
          </ul>
        </div>
      </div>
    )
  }
}
