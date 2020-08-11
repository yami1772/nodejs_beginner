//myPage2
/*
 * 
*/
var express = require('express');
// console.log(express);

var app = express();

app.get('/', function(req, res){
    res.send('first express example ,create a service');
});

app.get('/a', function(req, res){
    // res.send('this is a page');
    res.send('this is a page a<br><a href="/a">JumpToPageA</a>');
});

app.get('/a/a1', function(req, res){
    res.send('this is a1 page');
});

app.get('/b', function(req, res){
    res.send('this is b page');
});


app.listen(4685, function(){
    console.log('4685 listening');
});

