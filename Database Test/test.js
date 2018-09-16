var http = require('http');
var fs = require('fs');
var connectio = require('./database');


http.createServer(function (req, res) {
    fs.readFile('app.html',function(err,data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
    });
}).listen(8080);