//state mount/update/unmount 
// state = var state, let state ตัวแปรตัวหนึ่ง ที่เก็บค่าข้อมูล ลักษณะประเภท ค่าที่มีการแสดงผล การเปลี่ยนแปลง 
// class state = {property: value, property: value}

// this.state.property 

//const [state, setState] = useState(...)
//state =  property 
//... = value
//

// react > show display/web => render (render = การสร้างหน้าเว็บขึ้นมาใหม่ อิงจาก state )

//useState: คือ function เอาไว้กำหนด state (ตัวเริ่มต้น) และสร้าง function ที่เอาไว้เปลี่ยนค่าใน state 
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
    // console.log(e.target)
    setInput(e.target.value)
    // e.target = <input onChange={inputValue} value="aaa" />
    // e.target.value = "aaa"
  }

  let add = () => {
    setTodoList([...todoList, { id: todoList.length + 1, text: input }])
    setInput("")
  }

  let deleteList = (id, index) => {
    console.log({ id: id })
    console.log({ index })
    let deleteInput = [...todoList].filter((item) => item.id !== id)
    console.log(deleteInput)
    let a = deleteInput.filter((item) => item.id !== id)
    console.log(a)
    console.log(deleteInput)
    // let deleteInput = [...todoList]
    // console.log(deleteInput)
    // let a = deleteInput.splice(index, 1)
    // console.log(a)
    // console.log(deleteInput)
    // setTodoList(deleteInput)
  }

  let editList = (id, index) => {
    let editInput = prompt("New input")
    let b = [...todoList]
    b.splice(index, 1, { id: id, text: editInput })
    setTodoList(b)
    //   let b = [...todoList].map((item) => {
    //     if (item.id === id) {
    //       return {id: item.id, text: editInput};
    //     } else {
    //       return item;
    //     }
    //   })
    //   setTodoList(b)
  }


  return (
    <div className="App">
      <div> Todo List </div>
      <ul>
        {/* รับ index มาจาก map */}
        {todoList.map((obj, index) => {

          const id = obj.id
          return (<li key={obj.id}> {obj.text} <button onClick={() => deleteList(id, index)}> Delete </button>
            <button onClick={() => editList(id, index)}> Edit </button></li>)
        })}
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
