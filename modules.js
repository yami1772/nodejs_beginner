//模块系统
//文件与模块一一对应， 一个nodejs就是一个模块

const { myfun1 } = require("./myModule");

/* --------------------------------
nodejs 提供两个对象
    -exports
        模块公筷接口
    -require
        用于获取外部模块的接口

nodejs
    只公开一个方法
        export.方法名 = function(){
            //.........
        }

    把整个模块公开
        module.export = function(){
            //...
        }

*/

// exports.myModule =
var xx = require('./demo1_a');
console.log(xx);

