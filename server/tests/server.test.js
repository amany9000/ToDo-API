var expect = require("expect")
var request = require("supertest")
const {ObjectID} = require("mongodb");

var app = require("./../server.js").app
var todo = require("./../models/todo.js").todo

const testTodos = [{
	_id  :  new ObjectID(), 
	text : 'The destruction of of the ONE Ring'
},{
	_id  :  new ObjectID(), 
	text : 'Picking up some ice cream after that'	
}] 
beforeEach((done) => {
	todo.remove({}).then(() => {
		return todo.insertMany(testTodos); 
	}).then(()=>done());
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
					return done({err})
				todo.find({text}).then((result) =>{
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
					expect(result.length).toBe(2);
					done();
				}).catch((e) => done(e));
			}) 
	});
})
describe('GET /todos', () => {
	it('Should get all todos', (done) => {
		request(app)
			.get("/todos")
			.expect(200)
			.expect((res) => {
				expect(res.body.todos.length).toBe(2);
			})
			.end(done);
	})
})

describe('GET /todos/:id', () =>{
	it("should return a todo doc" , (done) => {
		request(app)
			.get(`/todos/${testTodos[0]._id.toHexString()}`)
			.expect(200)
			.expect((res) => {
				expect(res.body.todo.text).toBe(testTodos[0].text);
			})
			.end(done);
	});

	it("should return a 404" , (done) => {
		const idString = new ObjectID().toHexString();
		request(app)
			.get(`/todos/${idString}`)
			.expect(404)
			.end(done);
	});

	it("should return a 404" , (done) => {
		request(app)
			.get(`/todos/123`)
			.expect(404)
			.end(done);
	});	
})

describe('Delete /todos/:id', () =>{
	it("should delete a todo" , (done) => {
		testId = testTodos[1]._id.toHexString();
		request(app)
			.delete(`/todos/${testId}`)
			.expect(200)
			.expect((res) => {
				expect(res.body.todo.text).toBe(testTodos[1].text);
			})
			.end((err,res) => {
				if(err){
					return done(err)
				}
				todo.findById(testId).then((result) => {
					expect(result).toBeFalsy();
					done();
				}).catch((e) => done(e));
			});
	});

	it("should return a 404" , (done) => {
		const idString = new ObjectID().toHexString();
		request(app)
			.delete(`/todos/${idString}`)
			.expect(404)
			.end(done);
	});

	it("should return a 404" , (done) => {
		request(app)
			.delete(`/todos/123`)
			.expect(404)
			.end(done);
	});	
})