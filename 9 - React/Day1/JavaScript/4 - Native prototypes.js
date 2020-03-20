// * exercise 1 *

Function.prototype.defer = function (ms) {
  setTimeout(this, ms)
}

function f() {
  alert("Hello!");
}

f.defer(3000);



// * exercise 2 *

Function.prototype.defer = function (ms) {
  return function (a,b){
    setTimeout(() => alert(a+b), ms)

  }
}

function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2); 