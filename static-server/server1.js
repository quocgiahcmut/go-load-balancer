const http = require('http');
const host = 'localhost';
const port = 3031;

const handler = (req, res) => {
  if (req.url === '/ping') {
    res.writeHead(200);
    res.end('pong from Server 3031');
  } else {
    res.writeHead(200);
    res.end('root');
  }
};

const server = http.createServer(handler);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
