const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

let studentsList = [
  {
    "id": 1,
    "picture": "🌽",
    "name": "sonter",
    "age": 18,
    "point": 75,
    "description": "I'm sonter from computer engineering A university. I'm 18 years old."
  },
  {
    "id": 2,
    "picture": "🥑",
    "name": "nat",
    "age": 19,
    "point": 78,
    "description": "I'm nat from computer engineering B university. I'm 19 years old."
  },
  {
    "id": 3,
    "picture": "🥦",
    "name": "tle",
    "age": 22,
    "point": 97,
    "description": "I'm tle from computer engineering C university. I'm 22 years old."
  }
]

app.use(bodyParser.urlencoded({ extended: false })) // use middleware
app.use(bodyParser.json()); // user middleware

app.get('/', function (req, res) {
  // res.render('index', {name: 'kla', age: 25, numberList: [1, 2, 3, 4, 5]});
  res.render('index', { studentsList });
})

app.get('/student/:id', function (req, res) {
  let id = Number(req.params.id)
  let targetStudent = studentsList.find(ele => ele.id === id);
  res.render('student', { targetStudent })
})

app.listen(8002, function () {
  console.log('Server is running on port 8002');
})