import React from 'react';
import logo from './logo.svg';
import Post from './Components/Post'
import Profile from './Components/Profile'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Display All Post </h1>
      <Post id={1} message={"Hello, World"} />
      {/* Changing depend on props */}
      <br />
      <Post id={2} message={"Hello, A"} />
      <Post id={3} message={"Hello, B"} />
      <Post id={4} message={"Hello, C"} />
      <Profile name="Sonter" age={19}> Hobby: "Play Football" </Profile>
      <Profile name="Kla" age={22} />
    </div>
  );
}




export default App;
