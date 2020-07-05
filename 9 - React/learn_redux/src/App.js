import React from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component {
  state = {
    name: "",
    email: ""
  }

  AddHistory = (e) => {
    e.preventDefault();
    this.props.addHistory({ type: "ADD_HISTORY", name: this.state.name, email: this.state.email })
    this.setState({ name: "", email: "" })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.props.data}
          <div>
            <button onClick={this.props.plus}>Plus</button>
            <button onClick={() => this.props.minus({ type: "Decrement" })}>Minus</button>
            <button onClick={() => this.props.reset({ type: "Reset" })}>Reset</button>
            <button onClick={() => this.props.addNum({ type: "ADD_NUM", num: this.props.data })}>addNum</button>
            <button onClick={() => this.props.addPerson({ type: "ADD_PERSON" })}>addPerson</button>
          </div>

          <ul>
            {this.props.state.arr.map((num, idx) =>
              <li key={idx}>  {num} </li>)}
            {this.props.state.arrObj.map((obj, idx) =>
              (obj.name ? obj.email ? <li key={idx}> name: {obj.name}, e-mail: {obj.email} </li> : <li key={idx}> name: {obj.name}, e-mail: No email </li> : null))}
          </ul>

          <form onSubmit={this.AddHistory}>
            <input type="text" placeholder="name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} ></input>
            <input type="text" placeholder="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}></input>
            <button type="submit">Submit</button>
          </form>

        </header>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.count,
    state: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    plus: () => dispatch({ type: "Increment" }),
    minus: (action) => dispatch(action),
    reset: (action) => dispatch(action),
    addNum: (action) => dispatch(action),
    addPerson: (action) => dispatch(action),
    addHistory: (action) => dispatch(action)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
