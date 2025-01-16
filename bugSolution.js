const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

//Handle the 'close' event

server.on('close', () => {
  console.log('Server closed gracefully');
});

server.listen(8080);
console.log('Server is running at http://localhost:8080');

// Use a signal handler to gracefully close the server (For production environments)

process.on('SIGINT', () => {
  console.log('Shutting down...');
  server.close(() => {
    console.log('Server closed successfully.');
    process.exit(0);
  });
});
//Alternative: server.close(()=>process.exit(0));