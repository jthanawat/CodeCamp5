// const express = require('express');
// const app = express();

// app.get('/sayhi', function (req, res) {
//     res.send('Hello, World')
// })

// app.get('/saygoodbye', function (req, res) {
//     res.send('Goodbye, World')
// })

// app.listen(3000);

//* Lab 1 *
// app.get('/bye', function(req, res) {
//     res.send("Good bye")
// })

// app.listen(5555)

//* Lab 2 *
// app.post('/hellO', function(req, res) {
//     res.send("Hello POST")
// })

// app.put('/hello', function(req, res) {
//     res.send("Hello PUT")
// })

// app.delete('/hello', function(req, res) {
//     res.send("Hello DELETE")
// })

// app.listen(3000, function() {
//     console.log("Server is running");
// })

const express = require('express');
const app = express();

const userRoute = require('./routes/userRoute')
app.use('/user', userRoute)

const itemRoute = require('./routes/itemRoute')
app.use('/item', itemRoute)

app.listen(3001, function() {
    console.log("Server is running");
})