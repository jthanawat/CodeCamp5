// * Constructor *
// Lab 1
let user = {
  name: 'Nat',
  isAdmin: false
}

let user1 = {
  name: 'Tle',
  isAdmin: false
}


function User(firstname, isAdmin) {
  this.name = firstname;
  this.isAdmin = isAdmin;
}

let user = new User('Nat', true);
let user1 = new User('Tle', false);

console.log(user);
console.log(user1);


// Lab 2
function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert("my name is: " + this.name)
  }
}

let kla = new User("kla");

kla.sayHi();


//Exercise 1 : สร้าง constructor function ที่ใช้สำหรับสร้าง Calculator โดยต้องมี 3 Methods นี้
// read(): รับค่าจาก propmt สองตัว
// sum(): ให้คืนค่าจากการบวกกันของตัวแปรสองตัว
// mul(): ให้คืนค่าจากการคูณกันของตัวแปรสองตัว
function Calculator() {

  this.read = function() {
    this.x = Number(prompt("Insert x number"));
    this.y = Number(prompt("Insert y number"));
  }

  this.sum = function() {
    return this.x + this.y;
  }

  this.mul = function() {
    return this.x * this.y;
  }
}

let calculator = new Calculator();
calculator.read();

alert("sum=" + calculator.sum());
alert("mul=" + calculator.mul());


//Exercise2 : สร้าง constructor function Accumulator(startingValue)
// โดยที่ Object ดังกล่าวควร เก็บค่า ล่าสุดไว้ใน property ที่มี key ชื่อว่า value, ค่าเริ่มต้นของ key ชื่อ value นี้ คือ startingValue
// ฟังก์ชัน read() ควรอ่านค่าจาก propmt() และ เพิ่มค่าที่ใส่เข้ามาใน key ชื่อ value
// พูดง่าย ๆ ก็คือ value คือผลรวมของ prompt โดยเริ่มจาก startingValue

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += Number(prompt("Insert number"));
  }
}

let accumulator = new Accumulator(4);

console.log(accumulator.value);
accumulator.read();
accumulator.read();
alert(accumulator.value);
