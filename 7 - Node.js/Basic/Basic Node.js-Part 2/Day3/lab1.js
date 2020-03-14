const express = require('express');
const app = express();

// Lab 1-a 
app.get('/static', function(req, res) {
  res.send("Hello World")
})

// Lab 1-b
app.get('/staticJSON', function(req, res) {
  let jsonResponse = {
    text: "Hello World"
  }
  res.send(jsonResponse);
})

// Lab 1-c
app.get('/echo', function(req, res) {
  res.send(req.query.text)
})

// Lab 1-d
app.get('/plus', function(req, res) {
  let a = Number(req.query.a);
  let b = Number(req.query.b);
  res.send(String(a + b));
})

// Lab 1-e
app.get('/plusByJSON', function(req, res) {
  let jsonObject = JSON.parse(req.query.jsonText);
  let a = Number(jsonObject.a)
  let b = Number(jsonObject.b)
  res.send(String(a + b));
})

// Lab 1-f
app.get('/plus/:a/:b', function(req, res) {
  let a = Number(req.params.a);
  let b = Number(req.params.b);
  res.send(String(a + b));
})

// Lab 1-g
app.get('/checkEvenNumber/:number', function(req, res) {
  let number = Number(req.params.number);
  res.send(number % 2 == 0);
})


app.listen(3000, function() {
  console.log('Server is running on port 3000');
})