// trying to set up tessel as netserver server

var net = require('net');

var server = net.createServer(function(socket) {
  socket.on('connect', function (err, data) {
    console.log('connected');
  });
  socket.on('data', function (data) {
    console.log('DATA ' + socket.remoteAddress + ': ' + data);

    socket.write('this stuff');
    

  })

});


server.listen(1337);
console.log('Tessel listening on port 1337');

