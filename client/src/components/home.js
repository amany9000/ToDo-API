import React, {Component} from 'react';

import Todos from './todos';
import AddTodo from './addTodo';

class Home extends Component {

  state  = {
    todos : [
      {id : 1, content : "Make star wars episode 8 better"},
      {id : 2, content : "Make America Exotic Again" }  
    ]
	}
	
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({todos});
  }

  addTodo = (todo) => {
    todo.id = (Math.random() * 100000) / 10;
    const stateTodos = [...this.state.todos, todo];
    this.setState({
      todos : stateTodos
    }, () => { console.log(this.state) });
  }

  render () {
    return (
      <div className="container">
        <h1 className = "center purple-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo} />
      </div>
    )    
  }
}

export default Home;