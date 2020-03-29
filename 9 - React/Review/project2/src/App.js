import React from 'react';
import logo from './logo.svg';
import Post from './Components/Post'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Display All Post </h1>
      <Post id={1} message={"Hello, World"} />
      {/* Changeing depend on props */}
      <br />
      <Post id={2} message={"Hello, A"} />
      <Post id={3} message={"Hello, B"} />
      <Post id={4} message={"Hello, C"} />
    </div>
  );
}




export default App;
