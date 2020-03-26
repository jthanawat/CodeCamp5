import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      arr: ["a", "b", "c", "d"],
      text: "",
      name: ""
    }

    // this.addList = this.addList.bind(this)
    // this.edit = this.edit.bind(this);
  }

  Increment = () => {
    this.setState({ value: this.state.value + 1 })
  }

  Decrement = () => {
    this.setState({ value: this.state.value - 1 })
  }

  Reset = () => {
    this.setState({ value : 0 })
  }

  addList = (e) => {
    e.preventDefault()
    let array = [...this.state.arr, this.state.text]
    this.setState({ arr: array, text: "", name: this.state.text })
    // let text = prompt("Fill in text box ")
    // let array = [...this.state.arr, text]
    // array = ["a", "b", "c", "d"]
    // array.push(text)

    // array.push(text)
    // array = ["a", "b", "c", "d"] <= [text]
    // array = ["a", "b", "c", text]
    // this.setState({ arr: array })
  }

  delete = idx => () => {
    let array = this.state.arr.filter((item, index) => index !== idx)
    this.setState({ arr: array })

  }
  editText = idx => () => {
    let newText = prompt("what is your new text")
    let array = this.state.arr.map((item, index) => index === idx ? newText : item)
    this.setState({ arr: array })
  }

  input = (e) => {
    e.preventDefault()
    this.setState({ text: e.target.value })
  }

  render() {

    return (
      <div className="App">
        <p style={{ fontSize: "45px" }}>
          count: {this.state.text}
        </p>

        <br></br>
        <button onClick={this.Increment}>Increment</button>	&nbsp;
        <button onClick={this.Decrement}>Decrement</button>	&nbsp;
        <button onClick={this.Reset}>Reset</button> &nbsp;

        <br></br>
        <form>
          What is your name: <input type="text" onChange={this.input} value={this.state.text}></input>
          <button onClick={this.addList}>Add</button>
        </form>

        <ul>
          {this.state.arr.map((item, index) => {
            return <li> {item}
              <button onClick={this.delete(index)}>Delete</button>
              <button onClick={this.editText(index)}>Edit</button>
            </li>
          })}
        </ul>

        <p>
          your name: {this.state.name}
        </p>
      </div>
    );
  }
}

export default App;
