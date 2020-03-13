const express = require('express') // Import express module ; require = importing (build-in node function)
const app = express(); // Creating new express app by using express function and assigning app variable

// Create ตัวที่ listen Get methods ที่ path '/'
app.get('/', function(req, res) {
  res.send('Hello, World');
})


app.get('/myname', function(req, res) {
  res.send('Thanawat J.')
})

// Set app listen(run) on port 8000 
app.listen(8000, function() {
  console.log('Server is running on port 8000');
})