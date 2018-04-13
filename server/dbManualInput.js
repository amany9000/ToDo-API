var mongoose = require("./db/mongoose.js")
var todo = require("./models/todo.js").todo
var user = require("./models/user.js").user

var newTodo = new todo({
	text : "Create a Death star"
});

newTodo.save().then((doc) => {
	console.log("Saved a todo - ",doc);
}, (e) => {
	console.log("Unable to save todo" , e)
});


var aNewTodo = new todo({
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
