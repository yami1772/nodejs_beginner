//arg events

var _eventEmitter = require('events').EventEmitter;
var _event = new _eventEmitter();


_event.on('xx1', function (arg1, arg2){
    console.log('1111111111', arg1)
});

_event.on('xx1', function (arg1, arg2){
    console.log('2222222222', arg2)
}); 

_event.emit('xx1','this arg1', 'this is arg2');
