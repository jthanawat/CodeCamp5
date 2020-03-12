// * Switch *
// Exercise 1 : แปลง Code ดังกล่าวเป็น if-else statement
/* switch (browser) {
    case 'Edge':
      alert( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;
  
    default:
      alert( 'We hope that this page looks ok!' );
  } */

  let browser = prompt("Enter your browser")
  if (browser == "Edge") {
      alert("You've got the Edge!");
  } else if (browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera") {
      alert("Okay we support these browser too");
  } else {
      alert("We hope that this page looks ok!");
  }
  
  // Exercise 2 : แปลง Code ดังกล่าวเป็น Switch cases
  
  /* let a = +prompt('a?', '');
  
  if (a == 0) {
    alert( 0 );
  }
  if (a == 1) {
    alert( 1 );
  }
  
  if (a == 2 || a == 3) {
    alert( '2,3' );
  } */
  
  let a = +prompt('a?', '');    // + means Number()
  switch (a) {
      case 0:
          alert(0);
          break;
      case 1:
          alert(1);
          break;
      case 2:
      case 3:
          alert('2,3');
          break;
  }
  
  // เสริมจากใน class
  // for (let i =1; i <= 10; i++) {
  //     if (i % 2 !== 0) {
  //         console.log(i);
  //         }
  // }
  
  
  //  for (let i = 0; i <= 50; i = i + 5) {
  //      console.log(i);
  //  }
  
  //  let จำนวนรอบ = prompt('จำนวนรอบ')
  //  let step = prompt('เพิ่มทีละ')
  //  for (let i = 1 ; i <= จำนวนรอบ; i= i + step) {
  //      console.log(i * 5);
  //  }