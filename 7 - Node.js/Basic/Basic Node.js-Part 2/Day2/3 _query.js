const express = require('express')
const pictureRoute = require('./routes/pictureRoute');

const app = express();

app.use('/user', pictureRoute)
app.get('/query_path', function (req, res) {
  console.log(req.query.age);
  console.log(req.query.name);
  res.send(req.query);
})

app.get('/add', function (req, res) {
  let firstNumber = Number(req.query.a);
  let secondNumber = Number(req.query.b);
  let answer;
  if (req.query.mode === "subtract") {
    answer = firstNumber - secondNumber;
  } else if (req.query.mode === "multiply") {
    answer = firstNumber * secondNumber;
  } else if (req.query.mode === "divide") {
    answer = firstNumber / secondNumber;
  } else {
    answer = firstNumber + secondNumber;
  }

  res.status(200).send(`The answer is ${String(answer)}`);
})

app.listen(3000, function () {
  console.log('Server is running on port 3000');
})