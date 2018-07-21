
const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

var UserSchema = new mongoose.Schema({
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

UserSchema.methods.toJSON = function () {
	var user = this;
	var userObject = user.toObject();

	return _.pick(userObject, ['_id','email']);	
};
UserSchema.methods.generateAuthTokens = function (){
	var user = this;
	var access = "auth";
	var token = jwt.sign({_id: user._id.toHexString(), access},"secret").toString();
	user.tokens.push({access, token});
	return user.save().then(() => {
		return token;
	})
}
var user = mongoose.model('User', UserSchema);

module.exports = {user};