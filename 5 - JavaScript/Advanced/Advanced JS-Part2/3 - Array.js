// * Array *
// Exercise 1 : ผลลัพธ์ของความยาว array คืออะไร
let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;
shoppingCart.push("Banana");

alert(fruits.length); // 4


// Exercise 2 : ให้ทำตามขั้นตอนต่อไปนี้
// สร้าง array ชื่อ styles ที่มี items ชื่อ “Jazz” และ “Blues”
// เพิ่ม “Rock-n-Roll” ต่อท้าย
// นำค่า Classics ไปทับค่าตรงกลางของ Array
// นำ items ตัวแรกออกมาและลบ items ตัวนั้นออกจาก array
// เพิ่ม “Rap” และ “Reggae” ไปข้างหน้าของ Array

let styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");
console.log(styles);
styles[1] = "Classics";
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift("Rap", "Raggae");
console.log(styles);


// Exercise 3 : เขียนฟังก์ชัน sumInput() ที่
// ใช้ propmt รับ value มาเก็บใน array
// หยุดถามเมื่อเจอค่าที่ไม่ใช่ ตัวเลข
// คำนวณผลรวมของตัวเลขทั้งหมดใน Array

function sumInput() {

  let arr = [];

  while (true) {
    let value = prompt("input value");

    if (value === "" || !value || isFinite(value)) break;
    number.push(+value);
  }

  let sum = 0;

  for (let number of numbers) {
    sum = sum + number;
  }
  return sum;
}
alert(sumInput());


// Solution for Exercise 3
function sumInput() {
  let arr = [];
  let number = Number(prompt("Enter Number"));

  while (isFinite(number)) {
    arr.push(number);
    number = Number(prompt("Enter Number"));
  }

  let sum = sumArray(arr);

  console.log(sum);
}

function sumArray(arr) {
  let sum = 0;

  for (let number of arr) {
    sum += number
  }
  return sum;
}

sumInput();