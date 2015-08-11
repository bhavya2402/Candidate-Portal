var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var employeeSchema = new Schema({
	email : String,
	mobileNumber : Number,
	firstName  : String,
	lastName : String,
	blockNumber : Number,
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

	 var email = data.email,
	 	mobileNumber = data.mobile,
	 	firstName = data.firstName,
	 	lastName = data.lastName,
	 	blockNumber = data.blockno,
	 	streetName = data.streetname,
	 	postalCode = data.postalCode,
	 	City = data.city,
	 	State = data.state,
	 	Country = data.country,
	 	MonthlyRental = data.rent,
	 	NumRooms = data.rooms,
	 	NumBathrooms = data.bathrooms,
	 	ApartmentArea = data.area;

	 var employee = new employeeModel({
	 	email : email,
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