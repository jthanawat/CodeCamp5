import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      visible: true,
    }
  }

  // visibleOnClick () แบบนี้ต้อง bind()
  visibleOnClick = () => {
    // not should .state but setState render again
    this.setState({
      visible: !this.state.visible //call this toggle switch
    })
  }

  render() {
    const visible = this.state.visible

    return (
      <>
        <div className="App">
          <p> 1st React Review </p>

          This is the Content.

          <br />
          <br />
          <button onClick={this.visibleOnClick} style={{ height: "50px", width: "300px", fontSize: "18px" }}>
            Status: {visible ? "Show" : "Hide"}
          </button>

          {visible ?
            <div style={{ fontSize: "24px", border: "1px solid blue" }}>
              Hello, World
            </div>
            : null}
        </div>
        <br />
      </>
    )
  }
}

// function App() {
//   const name = "codecamp";

//   return (
//     <>
//       <div className="App">
//         <p> This content is about Codecamp#5 </p>
//       </div>
//       <br />
//       <div>
//         <p> This content is about Codecamp#5</p>
//       </div>
//       <label htmlFor="name"></label>
//       <p> My name is {name} </p>
//     </>
//   );
// }

export default App;
