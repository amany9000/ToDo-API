require("./config.js")
const _ = require("lodash")
const express = require("express")
const bodyParser = require("body-parser")
const {ObjectID} = require("mongodb")

var mongoose = require("./db/mongoose.js")
var todo = require("./models/todo.js").todo
var user = require("./models/user.js").user
var {authenticate} = require("./middleware/authenticate");

var port = process.env.PORT;
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
	todo.findByIdAndUpdate( id, {$set : body}, {new:true}).then((todo) => {
		if(!todo){
			return res.status(404).send();
		}
		res.send({todo});
	}).catch((e) => {
		res.status(400).send();
	});
})

app.get("/users/me", authenticate,(req, res) => {
	res.send(req.user);
})

app.post("/users", (req,res) => {
	var body = _.pick(req.body, ["email", "password"]);
	var User = new user(body);
	User.save().then(() => {
		return User.generateAuthTokens();
	}).then((token) => {
		res.header("x-auth", token).send(User);
	}).catch((e) => {
		res.status(400).send(e);
	});
});

app.post("/users/login", (res,req) => {
	var body = _.pick(req.body, ["email", "password"]);

	user.findByCredentials(body.email, body.password).then((user) => {
		return user.generateAuthTokens().then((token) => {
			res.header("x-auth", token).send(user);
		})
	}).catch((e) => {
		res.status(400).send();;
	})
})

app.listen(port, ()=> {
	console.log(`Started on port ${port}`);
})  

module.exports = {app}