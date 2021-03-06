const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


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

app.get('/', function (req, res) {
  res.render('index', {});
})

app.get('/students', function (req, res) {
  res.send(studentsList)
})

app.get('/students/:id', function (req, res) {
  res.send(studentsList)
})

app.post('/student', function (req, res) {
  const newStudent = {
    "id": getNewId(),
    "picture": req.body.picture,
    "name": req.body.name,
    "age": req.body.age,
    "point": req.body.point,
    "description": req.body.description
  }
  studentsList.push(newStudent);
  res.send(newStudent);
})

function getNewId() {
  return findMaxId() + 1;
}

function findMaxId() {
  let max = 0;
  for (let student of studentsList) {
    if (student.id > max) {
      max = student.id;
    }
  }
  return max;
}

app.delete('/students/:id', function (req, res) {
  studentsList = studentsList.filter(student => student.id !== Number(req.params.id))
  res.status(200).send(String(studentsList.length))
})

app.put('/student/:id', function (req, res) {
  
  studentsList = studentsList.map(student => {
    let updateStudent = {
      "id": req.params.id,
      "picture": req.body.picture || student.picture,
      "name": req.body.name || student.name,
      "age": req.body.age || student.age,
      "point": req.body.point || student.point,
      "description": req.body.description || student.description
    }
    if (student.id === Number(req.params.id)) {
      return updateStudent
    } else {
      return student;
    }
  })
  res.send(studentsList);
})

app.listen(8000, () => {
  console.log('Server is running on port');
})