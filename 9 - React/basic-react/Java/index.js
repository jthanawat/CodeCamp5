let user = {
  name: 'yahoo',
  set name(value){
    this._name = value;
  },
  get name() {
    return this._name;
  }
}
user.name = 'Google'
console.log(user.name);


// let user = {
//   name: 'Kla',
//   surname: 'Tobtab',
//   get fullname() {
//     return `${this.name} and ${this.surname}`
//   },
//   set fullname(value){
//     value = value.split(" ");
//     this.name = value[0];
//     this.surname = value[1];
//   }
// }

// console.log(user.fullname);

// user.fullname = "Google Yahoo"

// console.log(user.fullname);
