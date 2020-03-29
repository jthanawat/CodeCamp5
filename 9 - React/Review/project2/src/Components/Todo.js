import React from 'react';

class Todo extends React.Component {
  constructor() {
    super()
    this.state = {
      text: "",
    }
  }

  addText = ()
  
  render() {
    const list = this.state.text;


    return (
        <div>
          <p> To-do List</p>
          <button onClick={() => } > Add </button>
          <ul>
            <li></li>
          </ul>
        </div>
    )
  }
}

export default Todo;