//This file is to query documents into the TodoApp Database
const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/",(err,db) => {
	if(err){
		return console.log("Some error occured, unable to connect ot MongoDB server");
	}
	console.log("Connected to MongoDB server");
	dbo = db.db("TodoApp")
	console.log("The doc of the given ID- ")
	dbo.collection("Todos").find(
		{ _id : new ObjectID("5b2962f63a0e293deda4b0e9")})
		.toArray().then((doc)=>{
		console.log(JSON.stringify(doc,undefined,2));
		},(err) => {
		console.log("unable to fetch from todo", err);
		})
	dbo.collection("Todos").find().count(
		{completed : false}).then((count)=>{
		console.log("The count of all objects in Todos- ")
		console.log(count);
		},(err) => {
		console.log("unable to count elements in todo", err);
		})	
	db.close();
})