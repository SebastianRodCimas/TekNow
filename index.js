
const http = require('http');

// Define a function to handle incoming HTTP requests
const requestHandler = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
};

// Create an HTTP server and pass the requestHandler function
const server = http.createServer(requestHandler);

// Define the port on which the server will listen
const port = 3000;

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});