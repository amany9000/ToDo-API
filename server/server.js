var mongoose = require("mongoose")

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
	text: {
		type: String,
		required :true,
		minlength : 1,
		trim : true 
	},
	completed: {
		type: Boolean,
		default : false
	},
	completedAt: {
		type : Number,
		default : null
	} 
});

var user = mongoose.model('User',{
	email: {
		type: String,
		required :true,
		minlength : 1,
		trim : true 
	},
});



var newTodo = new Todo({
	text : "Create a Death star"
});

newTodo.save().then((doc) => {
	console.log("Saved a todo - ",doc);
}, (e) => {
	console.log("Unable to save todo" , e)
});


var aNewTodo = new Todo({
	text : "  Take a selfie wtih the death star ",
	completed : true,
	completedAt : 1234
});

aNewTodo.save().then((doc) => {
	console.log("Saved a todo - ", JSON.stringify(doc,undefined,2));
}, (e) => {
	console.log("Unable to save todo", e)
});





var aUser = new user({
	email : "Darth@vader.com    "
});

aUser.save().then((doc) => {
	console.log("Saved a User - ", JSON.stringify(doc,undefined,2));
}, (e) => {
	console.log("Unable to save the user.", e)
});
