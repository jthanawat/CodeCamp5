// function
function addSync(a, b) {
  return a + b;
}
let sum = addSync(1,2);


// callback function
function add(a, b, callbackFunction) {
  callbackFunction( null, a + b );
}

let sum2;
add(1, 2, (err, returnValue) => {
  sum2 = returnValue;
});

console.log(sum);
console.log(sum2);