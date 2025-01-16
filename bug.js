const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running at http://localhost:8080');

//Uncommon bug: Server not shutting down gracefully.
//The issue is that the server might not close immediately when you call server.close().
//The server.close() method is asynchronous, so it will return before the server actually closes all connections.
//Solution: Use the 'close' event to ensure all connections are closed before shutting down.
//Additional issues: Memory leaks due to open file descriptors or long-running processes without appropriate cleanup.