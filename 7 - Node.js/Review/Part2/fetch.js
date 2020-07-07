fetch('https://covid19.th-stat.com/api/open/today')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })

let url = 'https://covid19.th-stat.com/api/open/today'
let d;

fetch(url)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    d = data;
    console.log(data)
  })
  .catch((err) => {
    console.log('Incomplete fetct : ' + err)
  })