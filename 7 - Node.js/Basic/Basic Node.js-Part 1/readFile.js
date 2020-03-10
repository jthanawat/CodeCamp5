const fs = require('fs');

const input = fs.readFile('codecamp.txt', 'utf-8', (err, data) => {
  console.log(data)
});

console.log("Reading file...")

