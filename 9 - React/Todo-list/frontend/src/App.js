//useState: คือ function เอาไว้กำหนด state และสร้าง function ที่เอาไว้เปลี่ยนค่าใน state 
// ตัวแปรตัวแรก เป็นค่าตั้งต้นเท่ากับใน useState เช่น todoList, ตัวแปรตัวที่สองสร้าง function ก็คือ setTodoList รับค่าแทนค่า useState

//useEffect: จัดการ life cycle ของ react eg. didmount update unmount
//ทำงานก็ต่อเมื่อ ถ้า state เปลี่ยนแปลง เมื่อ value เปลี่ยน
// useEffect(() => {
//   fetchData();
// }, []) ทำงานคล้ายๆ component didmount หากใส่ค่าใน [input] จะทำการ re-render เมื่อ value นั้นเปลี่ยน

//import useEffect, useState เพื่อ react hook 
import React, { useState } from 'react';
// import {
//   Modal, Checkbox, Typography, List, Row, Col, Input, Button, Notification
// } from 'antd';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]); //setTodoList ({id: 1}); กำหนดค่า state โดยตรง
  const [input, setInput] = useState("");

  const inputValue = e => {
    console.log(e.target.value)
    setInput (e.target.value)
    // e.target = <input onChange={inputValue} value="aaa" />
    // e.target.value = "aaa"
  }

  let add = () => {
    setTodoList([...todoList, {id: todoList.length + 1 , input: input}])
    setInput("")
  }

  return (
    <div className="App">
      <div> Todo List </div>
      <ul>
        {todoList.map((obj) => (
          <li key={obj.id}> {obj.input} </li>
        ))}
      </ul>

      <div>
        {/* <div onCLick = {e => console.log(e.target.innerText)}> content</div> */}
        <input value={input} onChange={inputValue} />
        <button onClick={add}> Add </button>
      </div>
    </div>
  );
}

export default App;
