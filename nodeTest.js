var http = require('http');

var req = http.request(
{
  hostname: '192.168.1.219',
  port: '3000',
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
});
req.on(
  'error',
  function(e) {
    console.log("Problem with request: %s", e.message)
  }
)
req.write(
  JSON.stringify( {hi: "4"} )
);

req.end();