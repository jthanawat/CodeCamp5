import './App.css';
import React, { useState, useEffect } from 'react'
import Home from '../src/components/Home'
import Context, { Context2 } from '../src/Context'
import Example from './components/Example';

function App() {
  const [state, setState] = useState({content: "Hello World"})
  return (

    // <Context.Provider value={{state, setState}}>
      <div>
    //   <Home />
      <Example />

      </div>

    // </Context.Provider>



  );
}

export default App;
