const fs = require('fs');
const path = require('path');

const  express = require('express');

const app = express();

app.use(express.urlencoded({extended: false}));


app.get('/currenttime', function(req, res) {
    res.send("<h1>" + new Date().toISOString() + "</h1>");
})

app.get('/', function(req, res) {
    res.send('<form action="/store-user" method="POST"><label>Your Name</label><input type="text" name="username"><button>Submit</button></form>');
})

app.post('/store-user', function(req,res){
    const userName = req.body.username;

    const filePath = path.join(__dirname, 'data', 'users.json');

    const fileData = fs.readFileSync(filePath);
    const existingUsers = JSON.parse(fileData);

    existingUsers.push(userName);

    fs.writeFileSync(filePath, JSON.stringify(existingUsers));

    
    res.send('<h1>Username stored!</h1>')
})

app.get('/users', (req,res) => {
    const filePath = path.join(__dirname, "data", "users.json");

    const fileData = fs.readFileSync(filePath);
    const existingUsers = JSON.parse(fileData);

    let responseData = '<ul>';

    for (const user of existingUsers) {
        responseData += '<li>' + user + '</li>'
    }

    responseData += '</ul>'

    res.send(responseData);
})

app.listen(3000);






// ---------------------------------------------------------------
// NODE SERVER

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