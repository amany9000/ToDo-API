import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from "./components/navbar"
import Homepage from "./components/home"
import About from "./components/about"
import Contact from "./components/contact"

class App extends Component {


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
      <div>
        <BrowserRouter>
          <div>  
            <Navbar/>
              <Route exact path='/' render={ () => (<Homepage state={this.state} addTodo={this.addTodo} deleteTodo={this.deleteTodo}/>)}></Route>
              <Route path='/about' component={About}></Route>
              <Route path='/contact' component={Contact}></Route>
        </div>
        </BrowserRouter>
      </div>
    );  
  }
}

export default App;
