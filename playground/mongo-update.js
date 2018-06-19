//This file is to update documents into the TodoApp Database
const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/",(err,db) => {
	if(err){
		return console.log("Some error occured, unable to connect ot MongoDB server");
	}
	console.log("Connected to MongoDB server");
	dbo = db.db("TodoApp")
	dbo.collection("Todos").findOneAndUpdate(
		{completed: true}, {$set :{completed: false}}, {returnOriginal  : false}).then((result)=>{
		console.log(`object with updated status - `,result);
		},(err) => {
		console.log("unable to update elements in Todos", err);
		})
	dbo.collection("Users").findOneAndUpdate(
		{_id : new ObjectID("5b2960fd24943e3d18d36b91")}, {$inc: {age : 1}}, {returnOriginal  : false}).then((result)=>{
		console.log(`object with updated age -`, result);
		},(err) => {
		console.log("unable to update elements in Users", err);
		})	
	db.close();
})