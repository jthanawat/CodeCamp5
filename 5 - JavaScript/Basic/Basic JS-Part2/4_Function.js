// Additional In-class Exercise 
// Exercise 1
function user(name1, BMI1, name2, BMI2) {
    if (BMI1 > BMI2) {
        alert(`Name : ${name1}\nBMI : ${BMI1}`);               // print(`Name : ${name1}\nBMI : ${BMI1})
    } else {
        alert(`${name2}, ${BMI2}`);
    }
}

let name1 = prompt("Input your name1");
let BMI1 = prompt("Input your BMI1");

let name2 = prompt("Input your name2");
let BMI2 = prompt("Input your BMI2");

user(name1, BMI1, name2, BMI2);


// Exercise 2
let name1 = prompt("Input your name1");
let w1 = prompt("Input your weight (kg)")
let h1 = prompt("input your height (cm)")
let BMI1;
BMI1 = w1 / (h1/100 ** 2)

let name2 = prompt("Input your name2");
let w2 = prompt("input your weight (kg)")
let h2 = prompt("input your height (cm)")
let BMI2;
BMI2 = w2 / (h2/100 ** 2)

function user(name1, BMI1, name2, BMI2) {
    if (BMI1 > BMI2) {
        alert(`${name1}, ${BMI1}`);
    } else {
        alert(`${name2}, ${BMI2}`);
    }
}

user(name1, BMI1, name2, BMI2);


//Exercise 3
let A, B;
B = 0;
while (true) {
  A = prompt("a number");
  if (+A > B) {
    B = A
    console.log(A);
  } else if (!A || A == null) {
    console.log(B);
    alert(B)
    break;
  }
}


//Exercise 4
let A, B, C;
B = 0;
C = 1;

while (true) {
  A = prompt("a number");
  console.log(A);

  if (+A > C) {
    C = A
    console.log(C);
  } else if (+A < C && C > B) {
    B = A
    console.log(B);
  } else if (!A || A == null) {
    alert(`second max : ${B}, max : ${C}`)
    break;
  }
}


// Solution of Exercise 3
// let max =  -infinity;
// let input = -infinity;

// while (input) (
//     input = +prompt("Enter NUmber");
//     if (input > max) {
//         max input
//     }
// )

// console.log(max);


// Solution of Exercise 4
// let max1 = -infinity;
// let max2 = -infinity;
// let input = -infinity;

// while (input) {
//     input = +prompt("Enter Number");
//     console.log(`input: ${input}`);
//     if (input >= max1) {
//         max2 = max1;
//         max1 = input;
//     } else if (input > max2 && input < max1) {
//         max2 = input;
//     }
// }
// console.log(max1, max2);