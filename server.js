const http = require('http');
const port = process.argv[2];
const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(port, ()=> {
  console.log("Server started at port : ",port);
});
