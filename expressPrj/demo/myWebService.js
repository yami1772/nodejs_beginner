/*express 简洁的nodejs web框架
 * 快速搭建一个完整网站
 *
 * 核心特性
 *  -可以使用一些中间件相应一些http请求
 *  -设置简单路由
*/

//使用express 创建一个服务
var express = require('express');
// console.log(express);

var app = express();

app.get('/', function(req, res){
    res.send('first express example ,create a service');
});

app.listen(4685, function(){
    console.log('4685 listening');
});


