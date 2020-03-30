import React from 'react';
import logo from './logo.svg';
import Post from './Components/Post'
<<<<<<< HEAD
import Profile from './Components/Profile'
=======
>>>>>>> 59d4ad5a793fd8a37c6246402e1d8b844722dcc5
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Display All Post </h1>
      <Post id={1} message={"Hello, World"} />
<<<<<<< HEAD
      {/* Changing depend on props */}
=======
      {/* Changeing depend on props */}
>>>>>>> 59d4ad5a793fd8a37c6246402e1d8b844722dcc5
      <br />
      <Post id={2} message={"Hello, A"} />
      <Post id={3} message={"Hello, B"} />
      <Post id={4} message={"Hello, C"} />
<<<<<<< HEAD
      <Profile name="Sonter" age={19}> Hobby: "Play Football" </Profile>
      <Profile name="Kla" age={22} />
=======
>>>>>>> 59d4ad5a793fd8a37c6246402e1d8b844722dcc5
    </div>
  );
}




export default App;
