const express = require('express') // Import express module
const app = express(); // Create express app

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