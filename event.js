//事件
//nodejs 单进程单线程 但是V8提供异步执行回调机制，可处理大并发请求，性能高
//nodejs 使用事件驱动的模型
//nodejs 每接受一个请求就把它关闭进行处理，请求完成放入处理队列，再把结果返回用户
// 这也叫“非阻塞式的IO /事件驱动IO”

//nodejs use event module
//  var zz = require('event');

// instsance emitter class of event module
//  var event1 = new xx.EventEmitter();

// and bind to listen 

var _events = require('events');
// console.log(_events);

var _EventEmitter = new _events.EventEmitter();

//不同于浏览器的事件，仅仅是个标识
_EventEmitter.on('event1',function(){
    console.log('evnet1 事件触发');
});

// console.log(_EventEmitter);
// _EventEmitter.emit('event1');

console.log(_EventEmitter);


