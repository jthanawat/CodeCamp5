// * Promise *
// Lab - 1
// ทำ ใช้ setTimeout เพื่อให้ console.log(input) เมื่อเวลาผ่านไป 1 วินาที เป็น Promise ที่ชื่อ function ว่า setTimeoutAndLog(input) แล้วลองเรียกใช้ดู
// ใช้ Promise จากข้อที่ 1 แล้วทำให้สามารถได้ผลลัพท์แบบเดียวกันกับ Lab ก่อนหน้า 
// ผ่านไป 1 วินาทีแล้ว console.log(‘a’)
// ผ่านไป 1 วินาทีแล้ว console.log(‘b’)
// ผ่านไป 1 วินาทีแล้ว console.log(‘c’)
// ผ่านไป 1 วินาทีแล้ว console.log(‘d’)

function setTimeoutAndLog(input) {
    return new Promise(function (fullfil, reject) {
      setTimeout(() => {
        console.log(input);
        fullfil(input)
      }, 1000);
    })
  }
  
  setTimeoutAndLog('a')
    .then(function (result) {
      return setTimeoutAndLog('b')
    })
    .then(function (result) {
      return setTimeoutAndLog('c')
    })
    .then(function (result) {
      return setTimeoutAndLog('d')
    })
    .then(function (result) {
    })
  
    .catch(function (error) {
      console.log(error);
    })
