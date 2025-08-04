const http = require('http');
const PORT = process.env.PORT || 3000;

const requestHandler = (req, res) => {
  if (req.url === '/health') {
    return res.end('OK');
  }
  res.end('Hello from Node.js app');
};

const server = http.createServer(requestHandler);
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
