import React, {Component} from 'react';

import Todos from './todos';
import AddTodo from './addTodo';

class Home extends Component {

  render () {
    return (
      <div className="container">
        <h1 className = "center  indigo-text text-lighten-1">Todo's</h1>
        <Todos todos={this.props.state.todos} deleteTodo={this.props.deleteTodo}/>
        <AddTodo addTodo={this.props.addTodo} />
      </div>
    )    
  }
}

export default Home;