
const _ = require("lodash")
const express = require("express")
const bodyParser = require("body-parser")
const {ObjectID} = require("mongodb")

var mongoose = require("./db/mongoose.js")
var todo = require("./models/todo.js").todo
var user = require("./models/user.js").user

var port = process.env.PORT || 3000;
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
	});
})

app.get("/todos/:id",(req,res) => {
	var id = req.params.id
	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}

	todo.findById(id).then((todo) => {
		if(!todo){
			return res.status(404).send();
		}
		res.status(200).send({todo});
	}).catch((e) => {
		res.status(400).send();});
});

app.delete("/todos/:id",(req,res) => {
	var id = req.params.id;
	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}

	todo.findByIdAndRemove(id).then((todo) => {
		if(!todo){
			return res.status(404).send();
		}
		res.status(200).send({todo});
	}).catch((e) => {
		res.status(400).send();});
});

app.patch("/todos/:id", (req,res) => {
	var id = req.params.id;
	var body = _.pick(req.body, ['text', 'completed']);
	
	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}
	
	if(_.isBoolean(body.completed) && body.completed){
		body.completedAt = new Date().getTime();
	}else{
		body.completed = false;
		body.completedAt = null;
	}
	todo.findByIdAndUpdate( id, {$set : body}, {new:true}).then((Todo) => {
		if(!Todo){
			return res.status(404).send();
		}
		res.send({Todo});
	}).catch((e) => {
		res.status(400).send();
	});
})

app.post("/users", (req,res) => {
	var User = new user({
		email : req.body.email
	});
	User.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	})
});

app.listen(port, ()=> {
	console.log(`Started on port ${port}`);
})  

module.exports = {app}