
var mongoose = require("mongoose")
var validator = require("validator")

var user = mongoose.model('User',{
	email: {
		type: String,
		required: true,
		minlength: 1,
		trim: true,
		unique: true,
		validete: {
			validator: validator.isEmail,
			message: '{value} is not a valid email' 
		} 
	},
	password: {
		type: String,
		required: true,
		length: 8
	},
	tokens: [{
		access: {
			type: String,
			required: true
		},
		token: {
			type: String,
			required: true
		}
	}]
});

module.exports = {user};