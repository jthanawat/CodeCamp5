let pi = 3.14
let user = {
  name: "John",
  age : 24
}
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + 1);
}

module.exports.circleArea = (r) => {
  return pi * r ** 2
}


exports.getRandom = getRandom
module.exports.pi = pi;
// module.exports.circleArea = circleArea
exports.user = user;