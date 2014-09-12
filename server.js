var express = require('express');
var server  = express();

var morgan  = require('morgan');

var port    = process.env.PORT || 3000;

server.use(morgan('dev'));

server.use('/', express.static(__dirname+"/public/"));

server.listen(port, function(){
  console.log('server up and running on port: ' + port);
})
