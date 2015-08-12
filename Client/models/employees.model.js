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

function updateEmployeeByEmail(dataToUpdate) {
	console.log(" dataToUpdate"+dataToUpdate);
	// var data = dataToUpdate;

	// employeeModel.update({email : email },{ email: dataToUpdate.mobileNumber},function(err,result) {

	// 	if(err) {
	// 		console.log('Error while updating' + err);
	// 	}
	// 	else {
	// 		console.log(result);	
	// 	}

	// });
	employeeModel.save(dataToUpdate);
	
}


module.exports = {
	saveEmployee : saveEmployee,
	updateEmployeeByEmail: updateEmployeeByEmail
};