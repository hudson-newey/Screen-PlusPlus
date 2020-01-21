var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var websiteUSR = (url.parse(req.url, true).query).v;
  websiteUSR = "\"C:/Program Files (x86)/Google/Chrome/Application/chrome.exe\" " + websiteUSR;
  res.end(websiteUSR);

  var {exec} = require("child_process");
  exec(websiteUSR).unref();
}).listen(8080);