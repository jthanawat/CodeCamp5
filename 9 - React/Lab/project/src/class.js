// ****************************************************** Class **********************************************************************

class Human {
  constructor(name, age) {
  this.name = name;
  this.age = age;
  }
  can_say() {
  console.log(`my name is ${this.name}`)
  }
  can_jump() {
  console.log(`${this.name} is Jumping`)
  }
  show_age() {
  console.log(`${this.name} is ${this.age} year old`)
  }
  }
  
  class Superman extends Human {
  constructor(A, B, c) {
  super(B, A)
  // this.name = age
  // this.age = name
  this.power = c;
  }

  can_fly() {
  console.log(`${this.name} flying !`)
  }
  show_power() {
  console.log(`${this.name} have ${this.power} power !`)
  }
  }

  let Man = new Superman("sonter", "A")
  Man.can_fly()



  //****************************************************** Rest parameter  *********************************************************//
  //   ...parameter convert 1,2,3 to arr[1,2,3]  -> use in argument function

  function sumAll(...parameter){
      console.log(parameter);
  }

  sumAll();
  sumAll(1,2,3)




  function readAll(...texts){
      console.log(texts);
      for(let text of texts) console.log(text);
  }

  readAll();
  readAll("Hello","Chawintee","Hi")
  



  
  
  function readAll(name,surname,...texts){
      console.log(`name is ${name}`);
      console.log(`surname is ${surname}`);
      console.log(texts);
      for(let text of texts) console.log(text);
  }

  // readAll();
  readAll("Hello","Chawintee","Hi",2,3,4,5,6)



//********************************************************* Spread syntax ****************************************************/
// ...Itterribla variable type(string and array) convert (array,string) to seperate element -------> ex. [1,2,3,4,5] --> 1 2 3 4 5   ------> use in method



let arr = [1,2,3],
arr2 = [10,11,12];

console.log(Math.max(1,2,3));
console.log(Math.max(arr));
console.log(Math.max(...arr));
console.log(Math.max(...arr,...arr2));
console.log(arr);
console.log(...arr);
console.log(...arr,...arr2);

let str = `chawintee`
console.log(...str);