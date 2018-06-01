var express = require('express');
var socket = require('socket.io');

//App setup
var app = express();
var port = process.env.PORT || 4000;
var server = app.listen(port, function(){
    console.log('listening on PORT ');
})

//Static files
app.use(express.static('public'));
app.use(express.static('node_modules'));

// Socket setup & pass server
var io = socket(server);
io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

    //Handle response event
    socket.on('response', function(data){
        // console.log(data);
        io.sockets.emit('response', data);
    });

    socket.on('vote', function(data){
        // console.log(data);
        io.sockets.emit('vote', data);
    });

});