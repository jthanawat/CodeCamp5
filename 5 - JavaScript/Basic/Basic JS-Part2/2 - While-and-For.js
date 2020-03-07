// * Loops: while and for *
// Exercise 1 : เลขที่ถูก alert เป็นลำดับสุดท้ายคือเลขอะไร
// ans. เลขที่ถูก alert ลำดับสุดท้ายคือเลข 1 
let i = 3;

while (i) {
    alert( i-- );
}


// Exercise 2 : code ทั้งสองอันนี้จะแสดง alert ออกมาเหมือนกันทั้งหมดหรือไม่
// ans. ไม่เหมือนกันเนื่องจาก prefix ++ จะเพิ่มค่า1 ก่อนแล้วค่อยนำมาใช้ ส่วน postfix ++ จะนำตัวแปรมาเช็ค condition ก่อนแล้วจึงเพิ่มค่า1 ทีหลัง
let i = 0;
while (++i < 5) alert( i ); 

let i = 0;
while (i++ < 5) alert( i ); 


// Exercise 3 : code ทั้งสองอันนี้จะแสดง alert ออกมาเหมือนกันทั้งหมดหรือไม่
// ans. เหมือนกัน
for (let i = 0; i < 5; i++) alert( i );
for (let i = 0; i < 5; ++i) alert( i );


// Exercise 4 : ให้เขียน loop ทั้งแสดงเลข 2 ถึง 10 ออกมา
for (let i =2; i <= 10; i++) {
    console.log(i);
}


// Exercise 5 : เปลี่ยน code for loop ด้านล่างนี้ให้เป็น while loop โดยที่ผลลัพธ์ยังเหมือนเดิม
//  for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }
let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++
}

// Exercise เพิ่มเติม 1
let sum = 0;
for (let i = 1; i <= 1027; i = i + 2) {
    sum += i;
}
console.log(sum);

// Exercise เพิ่มเติม 2
let sum = 0;
while (true) {
    let value = prompt("ใส่เลข", '');
    if (!value) break; // (*)
    sum += value;
}
alert('Sum: ' + sum);

// Exercise เพิ่มเติม 3
let i = 3;
while (i) {
    alert( i--);
}

for (let i = 0; i < 3; i++) {
    alert(`number ${i}!`);
}

// Exercise 6 : ให้เขียนเกมส์ทายตัวเลขสำหรับเล่นสองคน
let numberA = prompt("input a number");
while (!(numberA >= 1 && numberA <= 100)) {
    alert("Please input a number between 1 and 100");
    numberA = prompt("Input a number between 1 and 100") 
}

let numberB;
while (numberA !== numberB) {
    numberB = prompt("Guess a number");
    if (numberB > numberA) {
    numberB = alert("Too high")
    } else if (numberB < numberA) {
    numberB = alert("Too low");  
    }
}

// Solution for Exercise 6 from Suntor
let answer = prompt('Enter you number');

while (true) {
    let guessNumber = prompt('Guess a number');
    if (guessNumber == answer) {
        alert('ถูกต้อง') 
        break;
    } else {
      if (guessNumber < answer) {
          alert('มากไป') 
      } else {
          alert('น้อยไป')
      }  
    }
}