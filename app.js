const http = require('http');

function handleRequest(req,res) {
    res.statusCode = 200;
    res.end('<h1>Hello from me!</h1>')
}

const server = http.createServer(handleRequest);

server.listen(3000);