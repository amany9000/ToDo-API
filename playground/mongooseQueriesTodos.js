const {ObjectID} = require("mongodb");

const {mongoose} = require('./../server/db/mongoose');
const {todo}     = require('./../server/models/todo');


var id = '5b2b9d6194e0a119eb871f74';

if(!ObjectID.isValid(id)) {
	console.log("ID not valid");
}

todo.find({                                       
	_id : id
}).then((todos) => {
	console.log('Todos', todos);
});

todo.findOne({
	_id : id
}).then((todo) => {
	if(!todo){
		return console.log("Todo not found");
	}
	console.log('Todo', todo);
}).catch((e) => {console.log(e)});

todo.findById(id).then((todo) => {
	if(!todo){
		return console.log("Id not found");
	}
	console.log('Todo by Id', todo);
}).catch((e) => {console.log(e)});