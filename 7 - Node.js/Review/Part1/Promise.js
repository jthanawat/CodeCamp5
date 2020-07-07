// console.log('1');
// setTimeout(() => console.log('2'), 1000)
// console.log('3');


// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('2');
//     resolve()
//   }, 1000)

// })

// console.log('1');
// promise.then(() => {
//   console.log('3');
// })



// console.log('1');
// new Promise(resolve =>
//   setTimeout(() => {
//     console.log('2');
//     resolve()
//   }, 1000)).then(() => {
// new Promise(resolve =>
//   setTimeout(() => {
//     console.log('3');
//     resolve()
//   }, 1000)).then(() => {
//     setTimeout(()=> console.log('4'), 1000) 
//   })
// })


function showText(text, time) {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      console.log(text)
      resolve()
    }, time)
  })
}

showText ('1', 1000)
.then(() => { return showText('2', 1000)})
.then(() => { return showText('3', 1000)})
.then(() => { console.log('Done');})