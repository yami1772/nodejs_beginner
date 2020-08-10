//get post
/**
 * get 请求实在url的？后面的部分
 * -util nodejs 的工具模块
 * -util.inspect 对象转换为字符串
 * 
 * -url模块
 * -url.parse 解析url
 */


var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res){
    res.writeHead(200, {
        'Content-Type': 'text/plain;charset=utf-8'
    });
    var _param = url.parse(req.url, true).query;
    console.log(_param);
    
    res.write('a = ' + _param.a + '\n');
    res.write('b = ' + _param.b);
    res.end();
    // res.end(util.inspect(url.parse(req.url)));
    // console.log(util.inspect(url.parse(req.url)));
    // res.end(url.parse(req.url));
}).listen(7896);

console.log('7896 listening');
