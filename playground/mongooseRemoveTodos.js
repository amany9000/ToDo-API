const {ObjectID} = require("mongodb");

const {mongoose} = require('./../server/db/mongoose');
const {todo}     = require('./../server/models/todo');


var id = '5b2e2d517c9c473621a92ae1';

if(!ObjectID.isValid(id)) {
	console.log("ID not valid");
}

todo.remove({                           // Removes a list of all todos                   
	_id : id                          // that meet the criterion 
}).then((result) => {
	if(result.n < 1){
			return console.log("Todo not found");
		}
	console.log('Todo Removed (by remove function)' );
}).catch((e) => {console.log(e)});

/*
todo.findOneAndRemove({                        //Removes the first todo that 
	_id : id                          // meets the criterion
}).then((todo) => {
	if(!todo){
		return console.log("Todo not found");
	}
	console.log('Todo Removed (by findOneAndRemove Function) - :', todo);
}).catch((e) => {console.log(e)});

todo.findByIdAndRemove(id).then((todo) => {          //Removes the first todo that 
	if(!todo){                              //meets the Id
		return console.log("Id not found");
	}
	console.log('Todo Removed (by findByIdAndRemove Function) - :', todo);
}).catch((e) => {console.log(e)});
*/