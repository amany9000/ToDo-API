var express = require("express")
var bodyParser = require("body-parser")

var mongoose = require("./db/mongoose.js")
var todo = require("./models/todo.js").todo
var user = require("./models/user.js").user

var app = express();
app.use(bodyParser.json());

app.post("/todos", (req,res) => {
	var Todo = new todo({
		text : req.body.text
	});
	Todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	})
})

app.get("/todos", (req,res) => {
	todo.find().then((todos) => {
		res.send({todos});		
	}, (e) => {	
		res.status(400).send(e);
	})
})

app.listen(3000, ()=> {
	console.log("Started on port 3000");
})  

module.exports = {app}