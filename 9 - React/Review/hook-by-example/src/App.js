import React from 'react';
import logo from './logo.svg';
import './App.css';


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
function App() {
  const [state, setState] = useState ({
    name: "sonter",
    age: 19
  })
 

  function setSecondState() {
    setState ({
      age: 40
    })
  }

  return (
    <div className="App">
      <button onClick={setSecondState}> Change Second State </button>
    </div>
  );
}

export default App;
