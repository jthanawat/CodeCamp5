// * Computed Properties * 
// Exercise : ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง 
// จนกว่าจะเจอคำว่า stop และนำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น console.log() object นั้นออกมา
let obj = {};
let key;
let value;

while (key !== "stop" || value !== "stop") {
  key = prompt("Enter key");
  if (key == "stop") {
    break;
  }
    value = prompt("Enter value")
    if (value == "stop") {
      break;
    }
  obj[key] = value;
}

console.log(obj);

// เสริม
// let key = prompt("Key");
// let value = prompt("Value");

// let obj = {};

// obj[key] = value;
// obj["age"] = 19;

// console.log(obj);

// let obj = {};

// while(true) {  
//   let propertyName = prompt("Enter property's Name");
//   if (propertyName == "stop") break;
//   let propertyValue = prompt("Enter property's Value");
//   obj[propertyName] = propertyValue;
// }

// console.log(obj);

// let v1 = "firstName"
// let user = {};


// user[v1] = "Thanawat";
// user["lastName"] = "J";
// user["age"] = 24;
// user["height"] = 160;


// Exercise 2 : ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง 
// โดยให้ key เป็นชื่อของผลไม้ และ value เป็นจำนวนของผลไม้ (number) โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย
let fruit = {};
let key;
let value;

while (true) {
  key = prompt("Enter fruit's name");

  if (key == "stop") {
    break;
  }

  value = Number(prompt("Enter fruit's amount"));

  if (value > 1) {
    fruit[key + "s"] = value;
    console.log(fruit);
  } else {
    fruit[key] = value;
    console.log(fruit);
  }
}