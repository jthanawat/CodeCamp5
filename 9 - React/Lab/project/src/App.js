import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  let arr = [];
  let point;
  let grade;

  while (true) {
    point = Number(prompt("Insert your point"))
    if (point >= 80) {
      grade = 'A';
    } else if (point >= 70) {
      grade = 'B';
    } else if (point >= 60) {
      grade = 'C';
    } else if (point >= 50) {
      grade = 'D';
    } else if (point < 50) {
      grade = 'F';
    } else {
      break;
    }
    arr.push({ "point": point, "grade": grade });
  }
  // return (<div>You point is {point}. You Got {grade}</div>)


  let arr1 = arr.map(item => <tr>
    <td>{item.point}</td>
    <td>{item.grade}</td>
    
    <button onClick={(index) => {arr.filter((item, indexAr) => index !== indexArr ?item : false)}}> delete </button>
    </tr>)

  return (
    <div className="App">
      <p style={{ background: "black" }}>
        Hello world
      </p>
      <table>
        <tr>
          <th>Score</th>
          <th>Grade</th>
        </tr>
        
          {arr1}
        
      </table>
    </div>
  );

}

export default App;
// ----------

// function App() {

//   let trial = [], point , grade ; 
//   while(true){ 
//     point = prompt(`Enter your score !!!`); 
//     if(point == "stop"){break;} 
//     grade = point >= 80 && 'A' || point >= 70 && 'B' || point >= 60 && 'C' || point >= 50 && 'D' || 'F'; 
//     trial.push({"point":point, "grade":grade});
//   }
//   console.log(trial);
//   let trial1 = trial.map(item => <tr><td>{item.point}</td><td>{item.grade}</td></tr>);

//   return (
//     <div className="App" style={{color: "lightgreen", fontSize: "23px"}}>
//     <table>
//       <thead>
//         <tr>
//         <th> Score </th>
//         <th> Grade </th>
//         </tr>
//       </thead>
//       <tbody>
//         {trial1}
//       </tbody>
//     </table>
//     </div>
//   );
// }

// export default App;
