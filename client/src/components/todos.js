import React from 'react';



const todos = ({todos, deleteTodo}) => {

	const todoList = todos.length ? 
		todos.map((todo) => {
			return (
				
				    <li class="collection-item avatar">
      					<i class="large material-icons circle green">insert_chart</i>

						  <span class="title" style={{maginTop: "90px"}}>{todo.content}</span>

      					<a href="#!" class="secondary-content"><i class="material-icons delete" onClick = {() => {deleteTodo(todo.id)}}>delete</i></a>
    				</li>
			)
		}) : (<p className="center">You have no todos, nothing left for you here</p>);

	return (
		<ul className="collection">
			{todoList}
		</ul>
	);
}

export default todos;