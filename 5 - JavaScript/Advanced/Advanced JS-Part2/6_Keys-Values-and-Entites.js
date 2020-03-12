// * Keys, Values, Entities *
//Exercise 1 : กำหนดให้ salaries เป็น Object
// ให้เขียนฟังก์ชัน sumSalaries(salaries) ที่คืนค่าเป็นผลผมรวมของเงินเดือน ถ้า salaries ไม่มีสมาชิก ให้คืนค่าเป็น 0

function sumSalaries(salaries) {
  let sum = 0;
  for(let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert(sumSalaries(salaries)); // 650
console.log(sumSalaries(salaries));


// Exercise 2 : ให้เขียนฟังก์ชัน count(obj) ที่คืนค่าเป็นจำนวน properties ใน object
function count(object) {
  return Object.keys(user).length;
}

let user = {
  name: 'John',
  age: 30
};

alert(count(user)); // 2