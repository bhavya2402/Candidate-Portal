var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var employeeSchema = new Schema({
	userId : String,
	email : String,
	mobileNumber : Number,
	firstName  : String,
	lastName : String,
	blockNumber : String,
	streetName : String,
	postalCode : Number,
	City : String,
	State : String,
	Country : String,
	MonthlyRental : Number,
	NumRooms : Number,
	NumBathrooms : Number,
	ApartmentArea : Number
});

var employeeModel = mongoose.model('employee',employeeSchema);

function saveEmployee(data) {

	console.log("saveEmployee" + data.email);

	 var email = data.email,
	 	userId = data.userId,
	 	mobileNumber = data.mobileNumber,
	 	firstName = data.firstName,
	 	lastName = data.lastName,
	 	blockNumber = data.blockNumber,
	 	streetName = data.streetName,
	 	postalCode = data.postalCode,
	 	City = data.City,
	 	State = data.State,
	 	Country = data.Country,
	 	MonthlyRental = data.MonthlyRental,
	 	NumRooms = data.NumRooms,
	 	NumBathrooms = data.NumBathrooms,
	 	ApartmentArea = data.ApartmentArea;

	 var employee = new employeeModel({
	 	email : email,
	 	userId : userId,
	 	mobileNumber : mobileNumber,
	 	firstName : firstName,
	 	lastName : lastName,
	 	blockNumber : blockNumber,
	 	streetName : streetName,
	 	postalCode : postalCode,
	 	City : City,
	 	State : State,
	 	Country : Country,
	 	MonthlyRental : MonthlyRental,
	 	NumRooms : NumRooms,
	 	NumBathrooms : NumBathrooms,
	 	ApartmentArea : ApartmentArea

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

// function updateEmployeeByEmail() {

// 	employeeModel.update({email : 'test@testing.com'},{mobileNumber : 123456789},function(err,result) {

// 		if(err) {
// 			console.log('Error while updating');
// 		}
// 		else {
// 			console.log('updated');	
// 		}

// 	});

// }

// updateEmployeeByEmail();
// // saveEmployee();

module.exports = {
	saveEmployee : saveEmployee
};