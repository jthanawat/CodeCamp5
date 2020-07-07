// let done = true

// function isItDoneYet() {
//   return new Promise((resolve, reject) => {
//     if (done) {
//       const workDone = 'Here is the thing I built'
//       resolve(workDone)
//     } else {
//       const why = 'Still working on something else'
//       reject(why)
//     }
//   })
  
// } 

// async function checkIt() {
//   try {
//   let d = await isItDoneYet()
//   console.log(d);
//   } catch (err) {
//     console.log(err);
//   }
// }

// checkIt()

//=============================
function showText(text, time) {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      console.log(text)
      resolve()
    }, time)
  })
}

async function runText () {
  try {
    await showText('1', 1000)
    await showText('2', 1000)
    await showText('3', 1000)
    await showText('4', 1000)
    console.log('Done');

  } catch (err) {
    console.log(err);
  }
} // IIFE

runText()


// showText ('1', 1000)
// .then(() => { return showText('2', 1000)})
// .then(() => { return showText('3', 1000)})
// .then(() => { console.log('Done');})