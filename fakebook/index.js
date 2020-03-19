const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


db.sequelize.sync().then(() => {
  app.listen(8001, () => {
    console.log("Server is running on port 8001");
  })
})