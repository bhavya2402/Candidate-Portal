
var app = require('express')(),
	express = require('express'),
	bodyParser = require('body-parser');
var mongoose = require('mongoose');

var path = require("path");

mongoose.connect('mongodb://localhost:12345/candidate');

var port = process.env.PORT || 8080;

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.static( __dirname + '/public'));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json({}));

app.get('/', function(req, res) {
	console.log('started server on localhost:8080');
	res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.post('/addCandidate', function(req, res) {
	console.log(req.body);
});

app.listen(port,function(){
	console.log("Running")
});