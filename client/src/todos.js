import React from 'react';

const todos = ({todos}) => {

	const todoList = todos.length ? 
		todos.map((todo) => {
			return (
				<div className="collection-item" key={todo.id}>
					<span>{todo.content}</span>
				</div>
			)
		}) : (<p className="center">You have no todos, nothing left for you here</p>);

	return (
		<div className="todos collection">
			{todoList}
		</div>
	);
}

export default todos;