const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const counterRoute = require('./routes/counter')
const cors = require("cors")

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/counters', counterRoute);

app.listen(8000, () => {
  console.log('Serer is running on port 8000')
});