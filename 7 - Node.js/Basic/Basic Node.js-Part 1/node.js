const fs = require('fs');

console.log(typeof fs);

fs.writeFileSync('CoDeCaMp.txt','Hello, World');

let content = fs.readFileSync('CoDeCaMp.txt', {
    encoding: 'utf-8'
});
console.log(content);


function mal(a, b, callbackFunction) {
    callbackFunction(a * b)
}

mal(2, 3,(result) => {
    console.log(result);
})


function max(a, b, callbackFunction) {
    if(a > b) {
        callbackFunction(a)
    } else {
        callbackFunction(b)
    }
}

max(2, 3,(result) => {
    console.log(result);
})

