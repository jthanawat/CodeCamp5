const http = require('http')

http.createServer((req, res) => {
  res.writeHead(200, {
    'content-type' : 'text/html'
  })

  if (req.url === '/') {
    res.write('<h2>This is Home page</h2>')
    return res.end()
  }

  if (req.url === '/user') {
    res.write('<h2>This is User page</h2>')
    return res.end()
  }

  res.writeHead(404, 'Not Found in our site...', {
    'content-type' : 'text/html'
  })
  res.end('<hr><h3> Not Found </h3></hr>')

}).listen(8000, () => { console.log('Server starts...'); })