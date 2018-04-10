//This file is to input documents into the TodoApp Database
const {MongoClient,ObjectID} = require("mongodb");
var id = new ObjectID();
console.log(id);
MongoClient.connect("mongodb://localhost:27017/",(err,db) => {
	if(err){
		return console.log("Some error occured, unable to connect ot MongoDB server");
	}
	console.log("Connected to MongoDB server");
	dbo = db.db("TodoApp")
		dbo.collection("Todos").insertOne({
		text : "Something I don't wanna do",
		completed : true
	} , (err,result) => {
			if(err){
			return console.log("unable to insert in todo", err);
			}
			console.log(JSON.stringify(result.ops,undefined,2));
		});
		dbo.collection("Users").insert([{
		_id : id,
		name : "Darth Vader",
		age : 48,
		location : "Death Star"
	},{
		name : "Master Yoda",
		age : 900,
		location : "That green swamp!!!"
	}] , (err,result) => {
			if(err){
			return console.log("unable to insert in todo", err);
			}
			console.log(JSON.stringify(result.ops,undefined,2) , result.ops[0]._id.getTimestamp());
		}); 	
	db.close();
}) 