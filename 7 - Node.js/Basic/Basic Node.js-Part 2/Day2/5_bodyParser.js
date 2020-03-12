const express = require('express')
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.post('/add', function (req, res) {

  let answer;
  let firstNumber = Number(req.body.a);
  let secondNumber = Number(req.body.b);

  if (req.body.mode === "subtract") {
    answer = firstNumber - secondNumber;
  } else if (req.body.mode === "multiply") {
    answer = firstNumber * secondNumber;
  } else if (req.body.mode === "divide") {
    answer = firstNumber / secondNumber;
  } else {
    answer = firstNumber + secondNumber;
  }
  console.log(answer);
  res.status(200).send(`The answer is ${String(answer)}`);
})

// switch (req.body.mode) {
//   case "add":
//     answer = firstNumber + secondNumber
//     break;
//   case "subtract":
//     answer = firstNumber - secondNumber
//     break;
//   case "multiply":
//     answer = firstNumber * secondNumber
//   case "divide":
//     answer = firstNumber / secondNumber
//     break;
//   default:
//     answer = firstNumber + secondNumber
// }

app.listen(3000, function () {
  console.log('Server is running on port 3000');
})