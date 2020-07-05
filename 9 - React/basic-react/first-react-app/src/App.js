import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentsClass from '../src/ComponentClass'
import ParentComponent from './ParentComponent';
import Clicker from '../src/Clicker'
import MovieCard from '../src/MovieCard';
import Chat from '../src/Chat'
import TodoList from '../src/TodoList'
import { Route, Switch, NavLink, Link } from 'react-router-dom'


// function Repeat(props) {
// let items = [];
// console.log(props.children())
// for (let i = 0; i < props.numTimes; i++) {
// console.log(i, props.children(i));
// items.push(props.children);
// console.log(items)
// }
// return <div> {items} </div>
// }

function App(props) {
  const style = {
    fontSize: "24px"
  }
  return (
    <Switch>
      <Route exact path="/">
        <Link to="/todolist">Todolist</Link>
        <Link to="/clicker">Clicker</Link>
        <Link to="/chat">Chat</Link>
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          Edit <code>src/App.js</code> and save to reload.
        </div>
      </Route>

      <Route path="/todolist">
        <TodoList />
      </Route>

      <Route path="/chat">
        <Chat />
      </Route>
      <Route path="/clicker">
        <Clicker />
      </Route>
      {/* <MovieCard /> */}
      {/* <p id="content" style={style}>Content</p>
      <ComponentsClass />
      <ComponentsClass />
      <ComponentsClass /> */}
      {/* <ParentComponent /> */}

    </Switch>


    // <Repeat numTimes={9}>
    // {/* {(index) => <div key={index}>This is item {index} in the list</div>} */}
    // {<p>Hello</p>}
    // </Repeat>
  )
}

// export = render to website
export default App;





// function App() {

//   const arr = [1,2,3,4,5]


//   return (
//     <div className="App">
//       {arr.map(ele => <h1>{ele}</h1>)}
//     </div>
//   );
// }


  // function Item(props) {
  //   return <li>{props.text}</li>;
  // }
  // function TodoList() {
  //   const todos = ['finish doc', 'submit pr', 'nag dan to review'];

  //   return (
  //     <ul>
  //       {todos.map((message) => <Item key={message} text={message} /> )}
  //     </ul>
  //   )
  // }

  // export default TodoList