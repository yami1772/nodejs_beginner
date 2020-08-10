
var _fs = require("fs");

// console.log(_fs);
// 阻塞
console.log('阻塞');
var _data = _fs.readFileSync('temp.txt');
console.log(_data.toString());

// ******************************************
// 基于回调的非阻塞文件读取
console.log('基于回调的非阻塞文件读取');

_fs.readFile('temp1.txt', function(err, data){
    if(err) return err;
    console.log(data.toString());
});
console.log('执行完毕，等待读取')



