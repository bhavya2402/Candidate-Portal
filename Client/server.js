
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
	console.log("Add Data" + req.body);
	employeeModel.saveEmployee(req.body);
	res.send(true);
});

app.put('/updateCandidate/:email', function(req,res) {
	// console.log("-----------------------------------------req parameters" + req.params.email);

	mongoose.model('employee').findById(req.params.email, function(err,employee) {
         if (err) {
			console.log(err);
		}else {
			// console.log("++++++++++++++++++++++++++++++ " + employee);
			employee.MonthlyRental = req.body.MonthlyRental;
			employee.NumRooms = req.body.NumRooms;
			employee.ApartmentArea = req.body.ApartmentArea;
			// employeeModel.saveEmployee(req.body);
			employee.save();
			res.send(employee);
		}
	});
});

app.delete('/deleteCandidate/:userId', function(req, res) {
	mongoose.model('employee').remove({"_id": req.params.userId} ,function (err) {
		if (err) {
			console.log(err);
		}else {
			res.send('success!!');
		}
	});
});

app.listen(port,function(){
	console.log("Running")
});

