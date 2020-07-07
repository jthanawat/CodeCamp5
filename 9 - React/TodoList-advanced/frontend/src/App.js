import React, { useState } from 'react';
import './App.css';

function App() {
  const [inProcess, setInProcess] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [complete, setComplete] = useState([]);

  const inputValue = e => {
    setTextInput(e.target.value)
  }

  let add = () => {
    setInProcess([...inProcess, { id: inProcess.length + 1, content: textInput }])
    setTextInput("")
  }

  let editText = (id, index) => {
    let editInput = prompt("New input")
    let a = [...inProcess]
    a.splice(index, 1, { id: id, content: editInput })
    setInProcess(a)
  }

  let move = (id, index) => {
    setComplete([...complete, { id: id, value: inProcess[id].content }])

    let deleteInput = [...inProcess].filter((item) => item.id !== id)
    setInProcess(deleteInput)
  }


  return (
    <div className="App">
      <div> Todo List </div>

      <div> In-process</div>
      <ul>
        {inProcess.map((obj, index) => {

          const id = obj.id
          return (<li key={obj.id} onClick={() => editText(id, index)} onDoubleClick={() => move(id)}>

            {obj.content} </li>)

        })}
      </ul>

      <div>
        <input value={textInput} onChange={inputValue} />
        <button onClick={add}> Add </button>
      </div>


      <div> complete </div>
      <ul>
        {complete.map((obj, index) => {
          return (<li> {inProcess[index].content} </li>)
        })}
      </ul>
    </div>
  );
}

export default App;
