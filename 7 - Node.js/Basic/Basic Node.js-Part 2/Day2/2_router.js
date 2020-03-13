const express = require('express')
const catRoute = require('./routes/catRoute'); // importing Express catRoute
const dogRoute = require('./routes/dogRoute');
const pictureRoute = require('./routes/pictureRoute');

const app = express();

app.use('/cat', catRoute)
app.use('/dog', dogRoute)

app.listen(8000, function() {
  console.log('Server is running on port 8000');
})

// Handler is a callback function that executes when a matching request type is found on the relevant route