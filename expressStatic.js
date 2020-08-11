/*简单的路由就是一个最简单的spa单页应用
 *
 * express内置中间件的设置，可用来设置静态目录
 * express.static()
 * 从而通过http的方式访问静态文件
 * 效果与访问phpstudy服务器上的文件是一样的
 * 
 */

var express = require('express');
var app = express();

app.use(express.static('G:\\D5\\2016年'));


// app.get('/', function(req, res){
//     res.send('根目录\n');
// });

app.listen(4685, function(){
    console.log('4685 listening,静态目录已启动');
});

