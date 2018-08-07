
const {ObjectID} = require("mongodb");

const {todo} = require("./../../models/todo");

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

var populateTodos =  function (done) {
	todo.remove({}).then(() => {
		return todo.insertMany(testTodos); 
	}).then(()=>done());
};

module.exports = {testTodos, populateTodos}