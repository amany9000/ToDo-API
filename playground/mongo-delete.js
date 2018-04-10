//This file is to delete documents into the TodoApp Database
const {MongoClient,ObjectID} = require("mongodb");
MongoClient.connect("mongodb://localhost:27017/",(err,db) => {
	if(err){
		return console.log("Some error occured, unable to connect ot MongoDB server");
	}
	console.log("Connected to MongoDB server");
	dbo = db.db("TodoApp")
	
	
	dbo.collection("Users").deleteMany(                        //Deletes multiple document
		{name : "Darth Vader"}).then((result)=>{
		console.log(result);
		},(err) => {
		console.log("unable to count elements in todo", err);
		})
	/*
	dbo.collection("Users").deleteOne(                         //Deletes the first matching doc it finds
		{name : "Darth Vader"}).then((result)=>{
		console.log(result);
		},(err) => {
		console.log("unable to count elements in todo", err);
		})
	
	dbo.collection("Users").findOneAndDelete(                  //Deletes the the first matching doc  
		{_id : new ObjectID("5acbdf24a7cb80149c2ebfca")}).then((result)=>{			   //it find and displys its content				
		console.log(result);
		},(err) => {
		console.log("unable to count elements in todo", err);
		})			
	*/
	db.close();
})