// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
This basic accelerometer example logs a stream
of x, y, and z data from the accelerometer
*********************************************/

var http = require('http');
var tessel = require('tessel');
var accel = require('accel-mma84').use(tessel.port['A']);

// accel.on('ready', function () {

//   accel.on('data', function (xyz) {
//     console.log(xyz);

//     var request = http.request({
//       hostname: '192.168.1.219', // Where your other process is running
//       port: 3000,
//       path: '/',
//       method: 'GET'
//     });

//     request.end();



//     console.log('sent');

//   });
// });
var request = http.get({
  hostname: "http://192.168.1.219",
  port:3000
})

setInterval(http.get({
  hostname: "http://192.168.1.219",
  port:3000
}, function (res) {
  console.log("Got response " + res.statusCode);
}).on('error', function (e) {
  console.log("Got error: " + e.message);
});


// var request = http.request({
//   hostname: '192.168.1.219', // Where your other process is running
//   port: 3000,
//   path: '/',
//   method: 'GET'
// }, function (err) {
//   console.log("I erred with", err)
// });

// request.end();










