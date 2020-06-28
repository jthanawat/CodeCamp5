import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentsClass from '../src/ComponentClass'
import ParentComponent from './ParentComponent';
import Clicker from '../src/Clicker'
import MovieCard from '../src/MovieCard';
import Chat from '../src/Chat'
import TodoList from '../src/TodoList'

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
    <div className="App">
      {/* <MovieCard /> */}
      <TodoList />
      <Chat />
      <Clicker />
      {/* <p id="content" style={style}>Content</p>
      <ComponentsClass />
      <ComponentsClass />
      <ComponentsClass /> */}
      {/* <ParentComponent /> */}
    </div>


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