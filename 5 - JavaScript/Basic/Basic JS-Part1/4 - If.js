// * Conditional operators: If *
// Exercise 1 : Browser จะโชว์ข้อความ "Hello Codecamp #5" ไหม
// ans. แสดง
if ("0") {
    alert('Hello Codecamp #5');
}   


// Exercise 2 : ใช้ if else ในการเขียนถามชื่อของคุณ ถ้าตอบถูกให้แสดงคำว่า “เก่งมาก” ถ้าตอบผิดให้แสดงคำว่า “คุณไม่รู้จักชื่อฉัน”
let myName = prompt ('What is my name?');
if (myName == 'thanawat', 'Thanawat') {
    console.log("เก่งมาก");
} else {
    console.log("คุณไม่รู้จักชื่อฉัน");}


// Exercise 3 : ใช้ prompt ในการรับคะแนนมาคำนวณเกรด
let myScore = prompt ('Insert your scores');

if (myScore >= 80) {
    alert('A');
} else if (myScore >= 70) {
    alert('B');
} else if (myScore >= 60) {
    alert('C');
} else if (myScore >= 50) {
    alert('D');
} else {
    alert('A');
}
// ในรูป Ternary Operators : myScore >= 80 ? console.log('A') : myScore >= 70 ? console.log('B') : myScore >= 60 ? console.log('C') : myScore >= 50 ? console.log('D') : console.log('A');


// Exercise 4 : เปลี่ยน if-else ข้างล่างในอยู่ในรูปของ Ternary Operators
// let age = prompt ('How old are you?');
// let price;
// if (age < 18) {
//     price = 20000
// } else {
//     price = 3500
// }

let yourAge = prompt ('How old are you');
let price;

price = (yourAge < 18) ? 2000 : 3500;
alert(price)



// เสริมในคลาส
// let isOver18 = confirm ('Over 18');
// if (isOver18 > 18) {
//     console.log('คุณสามารถผ่านไปได้');
// } else {
//     console.log('คุณไม่สามารภผ่านไปได้');
// }
