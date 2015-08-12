
var app = require('express')(),
	express = require('express'),
	bodyParser = require('body-parser');

var mongoose = require('mongoose');
var employeeModel = require('./models/employees.model');

var path = require("path");

mongoose.connect('mongodb://bhavya1124:bhavya1124@ds031903.mongolab.com:31903/candidatedb');


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

app.get('/getData', function(req, res) {

	mongoose.model('employee').find(function(err,employee) {
		if (err) {
			console.log(err);
		}else {
			// console.log(employee);
			res.send(employee);
		}
	});
});

app.post('/addCandidate', function(req, res) {
	console.log(req.body);
	employeeModel.saveEmployee(req.body);
});

app.post('/deleteCandidate', function(req, res) {
	mongoose.model('employee').remove(req.body.email)
	// employeeModel.saveEmployee(req.body);
});

app.post('/updateCandidate', function(req, res) {
	console.log(req.body);
	employeeModel.updateEmployeeByEmail(req.body);
});

app.listen(port,function(){
	console.log("Running")
});

