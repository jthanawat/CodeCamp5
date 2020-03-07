// * Object methods *
// Lab 
let obj1 = {
    name: 'nat',
    sayHi() {
        alert('Hello'//this.name)
    },
    sayGoodbye() {
        alert("Goodbye")
    }
}

obj1.sayHi();

//Exercise 1 : การทำงานของ code ดังกล่าวจะได้อะไรออกมา
// ans. Error ให้ใส่ semi-colon
let user = {
  name: "John",
  go: function () { alert(this.name) }
};

(user.go)()


//Exercise 2 : การทำงานของ code ดังกล่าวจะได้อะไรออกมา
function makeUser() {
  return {
    name: "John",
  }    //function ถ้า call this เปล่าๆไม่มี obj.function ตัว this จะไม่มีค่า undefined
    ref: function () {
      return this
  };
};

let user = makeUser();

alert(user.ref().name); // What's the result?


//Exercise 3 : สร้าง object calculator จาก 3 methods นี้:
// read() ใช้ prompts สำหรับรับค่ามา 2 ค่าและเก็บเป็น object properties.
// sum() คืนค่าผลบวกของ 2 ค่านั้น.
// mul() คืนค่าผลคูณของ 2 ค่านั้น.
let calculator = {
  read() {
    this.x = +prompt("Insert x number");
    this.y = +prompt("insert y number");
  },

  sum() {
    return this.x + this.y;
  },

  mul() {
    return this.x * this.y;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


//Exercise 4 : ให้ Object ชื่อ ladder มี method ขึ้น และ ลง
let ladder = {
  step: 0,
  up() {
    this.step++
    return this;
  },
  down() {
    this.step--
    return this;
  },
  showStep() { 
    alert( this.step )
    return this;
  }
};

ladder.up().up().down().showStep(); // 1

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); 