//This file is to query documents into the TodoApp Database
const {MongoClient,ObjectID} = require("mongodb");
var id = new ObjectID();
console.log(id);
MongoClient.connect("mongodb://localhost:27017/",(err,db) => {
	if(err){
		return console.log("Some error occured, unable to connect ot MongoDB server");
	}
	console.log("Connected to MongoDB server");
	dbo = db.db("TodoApp")
	console.log("The docs - ")
	dbo.collection("Todos").find(
		{ completed : false})
		.toArray().then((doc)=>{
		console.log(JSON.stringify(doc,undefined,2));
		},(err) => {
		console.log("unable to fetch from todo", err);
		})
	dbo.collection("Todos").count(
		{completed : false}).then((count)=>{
		console.log("The count - ")
		console.log(count);
		},(err) => {
		console.log("unable to count elements in todo", err);
		})	
	db.close();
})