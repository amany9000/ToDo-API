const {ObjectID} = require("mongodb");

const {mongoose} = require('./../server/db/mongoose');
const {todo}     = require('./../server/models/todo');


var id = '5b2b9d6194e0a119eb871f74';

if(!ObjectID.isValid(id)) {
	console.log("ID not valid");
}

todo.find({                           // Returns a list of all todos                   
	_id : id                          // that meet the criterion 
}).then((todos) => {
	if(todos.length == 0){
		return console.log("No Todos found");
	}
	console.log('Todos', todos);
}).catch((e) => {console.log(e)});

todo.findOne({                        //Returns the first todo that 
	_id : id                          // meets the criterion
}).then((todo) => {
	if(!todo){
		return console.log("Todo not found");
	}
	console.log('Todo', todo);
}).catch((e) => {console.log(e)});

todo.findById(id).then((todo) => {          //Returns the first todo that 
	if(!todo){                              //meets the Id
		return console.log("Todo Id not found");
	}
	console.log('Todo by Id', todo);
}).catch((e) => {console.log(e)});