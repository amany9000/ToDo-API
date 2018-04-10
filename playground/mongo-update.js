//This file is to update documents into the TodoApp Database
const {MongoClient,ObjectID} = require("mongodb");
var id = new ObjectID();
console.log(id);
MongoClient.connect("mongodb://localhost:27017/",(err,db) => {
	if(err){
		return console.log("Some error occured, unable to connect ot MongoDB server");
	}
	console.log("Connected to MongoDB server");
	dbo = db.db("TodoApp")
	dbo.collection("Todos").findOneAndUpdate(
		{name : "Something I don't wanna do"}, {$set :{completed: false}}, {returnOriginal  : false}).then((result)=>{
		console.log(result);
		},(err) => {
		console.log("unable to update elements in Todos", err);
		})
	dbo.collection("Users").findOneAndUpdate(
		{name : "Darth Vader"}, {$inc: {age : 1}}, {returnOriginal  : false}).then((result)=>{
		console.log(result);
		},(err) => {
		console.log("unable to update elements in Users", err);
		})	
	db.close();
})