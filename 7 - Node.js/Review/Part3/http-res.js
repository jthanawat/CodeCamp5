const http = require('http')

http.createServer((req, res) => {
  res.writeHead(200, {
    'content-type': 'text/plain',
    'Codecamp': 'five',
  })
  res.write('This is response message...\n')
  res.write('from your local server')
  res.end('<H2> Good bye </H2>')
}).listen(8000, () => { console.log('Server start...'); })