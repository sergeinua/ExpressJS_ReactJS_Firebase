var express = require('express');
var app = express();

app.use(express.static(__dirname + '/rapp/build'));
app.use(express.static(__dirname + '/rapp'));

app.get('*', function(req, res){
    res.sendFile(__dirname + '/rapp/build/index.html');
});

app.listen(3000);