//流 抽象接口 很多方法、对象都实现了这个接口
//eg 向服务器发起一个请求，requset对象，他就是一个stream
//在线看视频

/*
nodejs 中的四种流类型
    -Readable
    -Wirtable
    -Duple['dju:pl] 可读写
    -Transform 操作被写入数据，然后读出结果
*/

/*
所有stream流都是EventEmitter实例
    -data 有数据可读取时触发
    -end 无数据可读取时触发
    -error 接受写入发成错误触发
    -finish 所有数据被写入触发
*/

var _fs = require('fs');
var data = '';

// console.log(_fs);
var readStream = _fs.createReadStream('temp.txt');
readStream.setEncoding('utf8');

readStream.on('data', function(_d){
    data += _d;
});

readStream.on('end', function(){
    console.log(data);
});

console.log('read finish');


//管道流
//可读流与可写流
var readStream2 = _fs.createReadStream('temp.txt');
var writeStream = _fs.createWriteStream('write.txt');

// 主要用.pipe方法
readStream2.pipe(writeStream);
console.log('pipe stream established');

//链式流
//常见的是压缩和解压缩

var zlib = require('zlib');
readStream
    .pipe(zlib.createGzip())
    .pipe(_fs.createWriteStream('inputCompress.txt.gz'));
    // .pipe(zlib.createGunzip())
    // .pipe(_fs.writeStream('write.txt'));

console.log('Compressed Complished');
