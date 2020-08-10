//post demo

/*
    query.parse 用于将字符串转换为对象
*/

var http = require('http');
var querystring = require('querystring');

http.createServer(function (req, res) {
    var body = '';

    req.on('data', function (_d){
        body += _d;
    });
    
    req.on('end', function () {
        body = querystring.parse(body);
        res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8'});
        res.write();
        res.end();
    });
});

