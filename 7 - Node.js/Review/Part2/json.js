// let myJSON = '{"name": "Kate", "pet": {"dog": "Corgi", "cat": "Persian"}}';

// let myObj = JSON.parse(myJSON);
// console.log(myJSON);
// // Modify myObj...

// let myText = JSON.stringify(myObj);
// console.log(myObj);
// console.log(myText);

const fs = require('fs')
let data, jsonobj, users, newData, readData, objData

data = fs.readFileSync('./sample.json')
// console.log(data);

jsonobj = JSON.parse(data)
// console.log(jsonobj.users[0]);

users = jsonobj.users
// console.log(users);

users.map(user => {
  user.phoneNumber = user.userId.toString().repeat(7)
  // console.log(`${user.firstName} : ${user.phoneNumber}`);
})

// newData = JSON.stringify(jsonobj)
// fs.writeFileSync('./output.json', newData)
// console.log(newData);

readData = fs.readFileSync('./output.json')
// console.log(readData.toString());

objData = JSON.parse(readData)
console.log(objData);