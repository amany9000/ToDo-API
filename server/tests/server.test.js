var expect = require("expect")
var request = require("supertest")

var app = require("./../server.js").app
var todo = require("./../models/todo.js").todo

beforeEach((done) => {
	todo.remove({}).then(() => done());
});

describe("Post /todos", () => {
	it("should create a new todo", (done) => {
		var text = "Test the todo text technically !!!!!!";

		request(app)
			.post("/todos")
			.send({text})
			.expect(200)
			.expect((res) => {
				expect(res.body.text).toBe(text);
			})
			.end((err,res) => {
				if(err)
					return done(err)
				todo.find().then((result) =>{
					expect(result.length).toBe(1);
					expect(result[0].text).toBe(text);
					done();
				}).catch((e) => done(e));
			}) 
	});
	it("should give an error while creating a new todo", (done) => {
		var text = "       "
		request(app)
			.post("/todos")
			.send({text})
			.expect(400)
			.end((err,res) => {
				if(err)
					return done(err)
				todo.find().then((result) =>{
					expect(result.length).toBe(0);
					done();
				}).catch((e) => done(e));
			}) 
	});
})