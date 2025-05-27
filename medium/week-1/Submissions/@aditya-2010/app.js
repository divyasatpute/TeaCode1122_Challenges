const http = require('http');
http.createServer((req, res) => {
  res.end('Hello from Node app!');
}).listen(3000);
