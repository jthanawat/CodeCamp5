import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import Map from './Pages/Map'
import NotFound from './Pages/NotFound'
import Profile from './Pages/Profile'


function App() {

  return (
    <div className="App">
      <h1> Welcome to Thailand </h1>
      <br />
      <Link to="/about">About </Link>
      <br />
      <Link to="/map">Map</Link>
      <br />
      <Link to="/home">Home</Link>
      <br />
      <br />
      <br />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/index" component={Home} />  */}
        <Route exact path="/about" component={About} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/profile/:id" component={Profile} />
        <Route exact path="/error" component={NotFound} />
        <Redirect to="/error" />
      </Switch>
    </div>
  );
}

export default App;

// class App extends React.Component {
//   state = {
//     name: "sonter",
//     age: 19
//   }
    // set in class it will merge.
//   setSecondState = () => {
//     this.setState({
//       age: 40
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <button onClick={this.setSecondState}>Change age to 40</button>
//       </div>
//     )
//   }
// }


// hook will overlay and display only in setState "age : 40" not display name: sonter like class
// function App() {
//   const [state, setState] = useState ({
//     name: "sonter",
//     age: 19
//   })


//   function setSecondState() {
//     setState ({
//       age: 40
//     })
//   }

//   return (
//     <div className="App">
//       <button onClick={setSecondState}> Change Second State </button>
//     </div>
//   );
// }




