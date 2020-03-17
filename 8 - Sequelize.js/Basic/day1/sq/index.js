const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const { Op } = require("sequelize");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.post('/student', function (req, res) {
  let newStudent = {
    name: req.body.name,
    year: Number(req.body.year)
  }
  // CREATE
  db.student.create(newStudent)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(400).send(err))
})

app.get('/getAllStudent', async function (req, res) {
  // READ 
  const students = await db.student.findAll({ where: { point: { [Op.lt]: 16 } } })
  res.send(students);
})
// db.student.findAll()
//   .then(result => {
//   console.log(result);
//   res.status(200).send(result)
// })
//   .catch(error => {
//     console.log(error);
//     res.status(400).send(error)
// })

app.delete('/deleteStudent/:id', async function (req, res) {
  await db.student.destroy({ where: { id: Number(req.params.id) } })
  res.status(204).send();
})

app.put('/updateStudent', async function (req, res) {
  await db.student.update({ name: 'Nat' }), ({ where: { id: 2 } });
  res.send();
})

app.put('/changeName/:from/:to', async function (req, res) {
  const targetStudent = await db.student.findOne({ where: { name: req.params.from } })
  targetStudent.update({ name: req.params.to })
  res.send(targetStudent);
})

app.delete('/deleteByName/:name', async function (req, res) {
  const targetStudent = await db.student.findOne({ where: { name: req.params.name } })
  targetStudent.destroy()
  res.send(targetStudent);
})

// * add: one-to-one *
// app.post('/addStudentWithTeacher', function (req, res) {
//   db.student.create({
//     name: 'Base',
//     year: 1995,
//     point: 19,
//     teacher: {
//       name: 'Tuk',
//       age:12
//     }
//   }, {
//     include: [db.teacher]
//   })
// })


// * add: one-to-many *
app.post('/addTeacherWithManyStudents', async function (req, res) {
  const newTeacher = await db.teacher.create({
    name: 'Nat',
    age: 19,
    students: [
      {
        name: 'Jane',
        year: 1978,
        point: 11
      }, {
        name: 'Base',
        year: 1995,
        point: 98
      }, {
        name: 'Tare',
        year: 1995,
        point: 411
      },
    ]
  }, {
    include: [db.student]
  })

  res.status(201).send(newTeacher);
})

db.sequelize.sync().then(() => { // sequelize.sync connect database and build model in sql and you should sequelize-cli db:create first

  app.get('/getAllTeachers', async function (req, res) {
    const teachers = await db.teacher.findAll({ include: [db.student] });
    res.send(teachers)
  })

  app.listen(8002, () => {
    console.log("Server is running on port 8002");
  })
})