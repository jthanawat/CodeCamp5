// * Logical operators and If *
// Exercise 1 : คำสั่งต่อไปนี้จะแสดงค่าเป็นอะไร
alert (null || 2 || undefined);          // 2
alert (alert(1) || 2 || alert(3));       // แสดงค่่า alert (1)ก่อน แล้วคืนค่าเป็น 2
alert (1 && null && 2);                  // null
alert (alert(1) && alert(2));            // แสดงค่า alert(1)ก่อน แล้วคืนค่าเป็น undefined
alert (null || 2 && 3 || 4);             // 3


// Exercise 2 : เขียนคำสั่ง if ที่เช็คอายุว่าอยู่ระหว่าง 18 - 60 
let yourAge = prompt("Enter your age");

if (yourAge >= 18 && yourAge <= 60) {
    alert("Your age is required");
} else {
    alert("Your age is not required")
}


// Exercise 3 : เขียนคำสั่ง if ที่เช็คอายุว่าไม่อยู่ระหว่าง 18 - 60
let yourAge = prompt("Enter your age");

if (!(yourAge >= 18 && yourAge <= 60)) {
    alert("Your age is not required");
} else {
    alert("Your age is required")
}


// Exercise 4 : คำสั่ง alert ไหนที่จะถูกรันบ้าง
if (-1 || 0) alert( 'first');            // alert runs.
if (-1 && 0) alert( 'second');           // alert not runs.
if (null || -1 && 1) alert( 'third');    // alert runs.


// Exercise 5 : ให้เขียนระบบ login
let userName = prompt("คุณเป็นใคร ?");

if (userName == "Admin") {
    let password = prompt ("กรุณาใส่รหัสผ่าน")
    if (password == "codecamp#5") {
        alert("ยินดีต้อนรับ");
    } else if (password == "" || password == null) {        // else if (!password || password == "")
        alert("ยกเลิก");
    } else {
        alert("รหัสผ่านผิด");
    }
} else if (userName == "" || userName == null) {           // else if (!userName || userName == "")
    alert("ยกเลิก");
} else {
    alert("ฉันไม่รู้จักคุณ");
}