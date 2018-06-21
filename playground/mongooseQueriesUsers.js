const {ObjectID} = require("mongodb");

const {mongoose} = require('./../server/db/mongoose');
const {user}     = require('./../server/models/user');


var id = '5b2ba3bb910dcb1bb7afd98b';

if(!ObjectID.isValid(id)) {
	console.log("ID not valid");
}

user.find({                           // Returns a list of all users                   
	_id : id                          // that meet the criterion 
}).then((users) => {
	if(users.length == 0){
		return console.log("No users found");
	}
	console.log('users', users);
}).catch((e) => {console.log(e)});

user.findOne({                        //Returns the first user that 
	_id : id                          // meets the criterion
}).then((user) => {
	if(!user){
		return console.log("user not found");
	}
	console.log('user', user);
}).catch((e) => {console.log(e)});

user.findById(id).then((user) => {          //Returns the first user that 
	if(!user){                              //meets the Id
		return console.log("Id not found");
	}
	console.log('user by Id', user);
}).catch((e) => {console.log(e)});