// 创建一个http服务

//引入一个模块 把模块保存在 xx变量中

var _xx = require('http');
const { createServer } = require('tls');

// console.log(_xx)

// console.log(_xx.createServer)

_xx.createServer(function(request, response) {
    //http头部消息
    //状态码200
    //内容：txt/plain, html, xml ...
    response.writeHead(200, {'Content-Type':'text/html'});

    //向客户端返回数据
    response.end('<h1> first h1 label <\h1>')
}).listen(3443);

console.log('3443 listening')
