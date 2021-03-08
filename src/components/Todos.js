import React, { useState, useContext, useEffect } from "react";
import { CredentialsContext } from "../App";
import { v4 as uuidv4 } from "uuid";
import "./Todos.css"

export default function Todos() {
	const [todos, setTodos] = useState([]);
	const [todoText, setTodoText] = useState("");
	const [credentials] = useContext(CredentialsContext);
	const [filter, setFilter] = useState("uncompleted");

	const persist = (newTodos) => {
		fetch(`https://afternoon-everglades-00122.herokuapp.com/todos`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Basic ${credentials.username}:${credentials.password}`,
			},
			body: JSON.stringify(newTodos),
		}).then(() => {});
	};

	useEffect(() => {
		fetch(`https://afternoon-everglades-00122.herokuapp.com/todos`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Basic ${credentials.username}:${credentials.password}`,
			},
		})
			.then((response) => response.json())
			.then((todos) => setTodos(todos));
	}, []);

	const addTodo = (e) => {
		e.preventDefault();
		if (!todoText) return;
		const newTodo = { id: uuidv4(), checked: false, text: todoText };
		const newTodos = [...todos, newTodo];
		setTodos(newTodos);
		setTodoText("");
		persist(newTodos);
	};

	const toggleTodo = (id) => {
		const newTodoList = [...todos];
		const todoItem = newTodoList.find((todo) => todo.id === id);
		todoItem.checked = !todoItem.checked;
		setTodos(newTodoList);
		persist(newTodoList);
	};

	const getTodos = () => {
		return todos.filter((todo) =>
			filter === "completed" ? todo.checked : !todo.checked
		);
	};

	const changeFilter = (newFilter) => {
		setFilter(newFilter);
	};

	return (
		<div className="todosBody">
			<div>navbar</div>
			<div className="todos-dropdown-container">
				<div className="todos-dropdown-div">
					<div className="todos-dropdown-item">
						<div id="todo-dropdown"className="todo-dropdown-content">
							<form className="todo-form-content" onSubmit={addTodo}>
								<input
									value={todoText}
									onChange={(e) => setTodoText(e.target.value)}
									type="text"
								></input><br />
								<button type="submit">Save</button>
							</form>
							<div className="todos-create">
							<select value={filter} onChange={(e) => changeFilter(e.target.value)}>
								<option value="completed">Completed</option>
								<option value="uncompleted">Uncompleted</option>
							</select>

							{getTodos().map((todo) => (
								<div key={todo.id}>
									<input
										checked={todo.checked}
										onChange={() => toggleTodo(todo.id)}
										type="checkbox"
									/>
									<label>{todo.text}</label>
								</div>
							))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
