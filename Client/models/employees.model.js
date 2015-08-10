var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var employeeSchema = new Schema({
	email : String,
	mobileNumber : Number
});

var employeeModel = mongoose.model('employee',employeeSchema);

function saveEmployee(data) {

	 var email = data.email,
	 	mobileNumber = data.mobile;

	 var employee = new employeeModel({
	 	email : email,
	 	mobileNumber : mobileNumber
	 });

	 employee.save(function(err) {

	 	if(err) {
	 		console.log('Unable to save the data');
	 	}
	 	else {
	 		console.log('Document Saved');
	 	}

	 });	

}

function updateEmployeeByEmail() {

	employeeModel.update({email : 'test@testing.com'},{mobileNumber : 123456789},function(err,result) {

		if(err) {
			console.log('Error while updating');
		}
		else {
			console.log('updated');	
		}

	});

}

updateEmployeeByEmail();
// saveEmployee();

module.exports = {
	saveEmployee : saveEmployee
};