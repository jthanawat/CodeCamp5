import React from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.props.data}
          <div>
            <button onClick={() => this.props.plus({type: "Increment"})}>Plus</button>
            <button onClick={() => this.props.minus({type: "Decrement"})}>Minus</button>
            <button onClick={() => this.props.reset({type: "Reset"})}>Reset</button>
          </div>
        </header>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    plus: (action) => dispatch(action),
    minus: (action) => dispatch(action),
    reset: (action) => dispatch(action),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
