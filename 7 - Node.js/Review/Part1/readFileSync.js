const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
  if(err) {
    console.log('found Error');
    return;
  }
  console.log(data);
  console.log(data.toString());
})

// console.log('Done...');