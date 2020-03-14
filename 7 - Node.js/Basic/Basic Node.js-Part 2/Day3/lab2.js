const express = require('express');
const app = express();

app.get('/:number', function (req, res) {

  if (req.params.number % 2 !== 0) {
    res.status(400).send(`Bad input (400) because of odd number`)
  } else if (req.params.number % 2 == 0) {
    res.status(200).send(`Success (200) because of even number`)
  }
})

let jsonArray = [];

app.get('/number/all', function (req, res) {
  res.status(200).send(jsonArray)
})

app.post('/number/:element', function (req, res) {
  let number = Number(req.params.element);

  jsonArray.push(number);
  res.status(201).send(String(number));
})

app.delete('/number/:element', function (req, res) {
  jsonArray = jsonArray.filter(ele => ele !== Number(req.params.element))
  res.status(200).send(String(jsonArray.length));
})

app.put('/number/:from/:to', function (req, res) {
  jsonArray = jsonArray.map(ele => {
    if (ele === Number(req.params.from)) {
      return Number(req.params.to)
    } else {
      return ele;
    }
  })
})

const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/countField', function (req, res) {
  let length = Object.keys(req.body).length;
  res.send(String(length));
})

app.listen(3000, function () {
  console.log('Server is running on port 3000');
})