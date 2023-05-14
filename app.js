const  express = require('express');


const app = express();


app.get('/currenttime', function(req, res) {
    res.send("<h1>" + new Date().toISOString() + "</h1>");
})

app.get('/', function(req, res) {
    res.send("<h1>Hello from me!</h1>");
})

app.listen(3000)

// const http = request('http');

// function handleRequest(req,res) {
//     if(req.url === '/currenttime') {
//         res.statusCode = 200;
//         res.end("<h1>" + new Date().toISOString() + "</h1>");
//     } else if(req.url === '/') {
//         res.statusCode = 200;
//         res.end("<h1>Hello from me!</h1>");
//     }
// }

// const server = http.createServer(handleRequest);

// server.listen(3000);