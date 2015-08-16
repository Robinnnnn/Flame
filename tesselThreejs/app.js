var express = require('express');
var http = require('http');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var coordinates;
var seed = require('./seed').seed;

app.use(express.static(__dirname + '/js'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/', function(req, res, next) {
	var index = path.join(__dirname, 'index.html');
	res.sendFile(index);
});

app.post('/', function(req, res, next) {
	coordinates = req.body;
	res.sendStatus(200);
})

app.get('/getParentCoordinates', function(req, res, next) {
	/* enable this line when using Tessel */
	// res.send(coordinates)

	/* enable this line when testing */
	res.send(seed)
})

var port = 3000;
app.listen(port, function() {
	console.log('The server is listening magically on port', port);
});