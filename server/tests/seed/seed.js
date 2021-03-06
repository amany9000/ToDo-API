
const {ObjectID} = require("mongodb");
const jwt = require("jsonwebtoken");


const {todo} = require("./../../models/todo");
const {user} = require("./../../models/user");

const testTodos = [{
	_id  :  new ObjectID(), 
	text : 'The destruction of of the ONE Ring',
	completed : false
},{
	_id  :  new ObjectID(), 
	text : 'Picking up some ice cream after that',	
	completed : true,
	completedAt : 12345 
}]

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
	_id: userOneId,
	email: "testOne@gmail.com",
	password: "Pass1",
	tokens: [{
		access: "auth",
		token: jwt.sign(JSON.stringify({_id: userOneId.toHexString(), access: "auth"}, undefined, 2), "secret")
	}] 
},{
	_id: userTwoId,
	email: "testTwo@gmail.com",
	password: "Pass2",
}]

const populateUsers = (done) => {
	user.remove({}).then(() => {
		var userOne = new user(users[0]).save();
		var userTwo = new user(users[1]).save();

		return Promise.all([userOne, userTwo])		
	}).then(() => done());
} 
var populateTodos =  function (done) {
	todo.remove({}).then(() => {
		return todo.insertMany(testTodos); 
	}).then(()=>done());
};

module.exports = {testTodos, populateTodos, users, populateUsers}