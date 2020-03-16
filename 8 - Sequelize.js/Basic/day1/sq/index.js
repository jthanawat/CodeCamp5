const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.post('/student', function(req, res) {
  let newStudent = {
    name: req.body.name,
    year: Number(req.body.year)
  }
  db.student.create(newStudent)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(400).send(err))
})

db.sequelize.sync().then(() => {

  app.listen(8002, () => {
    console.log("Server is running on port 8002");
  })
})


