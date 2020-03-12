const express = require('express')

const app = express();


app.get('/add/:a/:mode/:b', function (req, res) {
  let answer;
  let firstNumber = Number(req.params.a);
  let secondNumber = Number(req.params.b);
  console.log(req.params.a);
  console.log(req.params.b);
  
  if (req.params.mode === "subtract") {
    answer = firstNumber - secondNumber;
  } else if (req.params.mode === "multiply") {
    answer = firstNumber * secondNumber;
  } else if (req.params.mode === "divide") {
    answer = firstNumber / secondNumber;
  } else {
    answer = firstNumber + secondNumber;
  }
  console.log(answer);
  res.status(200).send(`The answer is ${String(answer)}`);
})

app.listen(3000, function () {
  console.log('Server is running on port 3000');
})