//事件触发与监听的封装

var _EventEmitter = require('events').EventEmitter;
var _event = new _EventEmitter();

_event.on('timeout', function(){
    console.log('event emitted');
});


setTimeout(function(){
    _event.emit('timeout');
}, 2000);

console.log(_event);

