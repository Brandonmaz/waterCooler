import React, { useState, useContext, useEffect } from "react";
import logo from "../design/logo/logo_nobackgound.svg";
import { CredentialsContext } from "../App";
import { Link } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";
import "./Todos.css";
import "semantic-ui-css/semantic.min.css";

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
		console.log(todos.id);
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
			<div className="todosNavbar">
				<button className="todosHome">
					<Link to="/">
						<img className="accountGlass" src={logo} alt="icon" />
					</Link>{" "}
				</button>
				<div className="buttonToggle">
					<button className="remindersBtn todoRem">
						<Link className="remindersBtn" to="/todos">
							Reminders
						</Link>
					</button>
					<button className="accountBtn">
						<Link className="remindersBtn" to="/account">
							Account
						</Link>
					</button>
				</div>
			</div>
			<div className="todo-title-div">
				<h1 className="todo-title-h1">Reminders</h1>
				<p className="todo-title-p">
					Here are your custom reminders. You can <br />
					adjust them to fit your needs
				</p>
			</div>
			<div className="todos-flex">
				<div className="ui compact menu">
					<div
						role="listbox"
						aria-expanded="false"
						className="ui item simple dropdown no-hover"
						tabindex="0"
					>
						<div
							aria-atomic="true"
							aria-live="polite"
							role="alert"
							className="divider text"
						>
							Create new reminder
						</div>
						{/* <button className="plus icon"> */}
						<i aria-hidden="true" className="plus icon"></i>
						{/* </button> */}
						<div className="menu transition">
							<div className="todos-dropdown-item">
								<i aria-hidden="true" className="angle up icon"></i>
								<label className="switch-create">
									<input className="checkbox" type="checkbox" />
									<span class="slider round"></span>
								</label>
								<form className="todo-form-content" onSubmit={addTodo}>
									<p className="todo-p">Task name</p>
									<input
										className="input-todos"
										value={todoText}
										onChange={(e) => setTodoText(e.target.value)}
										type="text"
									></input>
									<br />
									<p className="notification-p">Notification sound</p>
									<input className="input-todos" type="text"></input>
									<br />
									<button className="todos-save-btn" type="submit">
										Save
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className="list-todos">
					<div className="completed-list">
						<select
							value={filter}
							onChange={(e) => changeFilter(e.target.value)}
						>
							<option className="option-list" value="completed">
								Completed
							</option>
							<option calssName="option-list" value="uncompleted">
								Uncompleted
							</option>
						</select>
					</div>
					<div className="todo-Box">
						{getTodos().map((todo) => (
							<div className="todo-item-div" key={todo.id}>
								<i aria-hidden="true" className="angle up icon list"></i>
								<label className="todo-item ">{todo.text}</label>
								<label className="switch">
									<input
										className="checkbox"
										checked={!todo.checked}
										onChange={() => toggleTodo(todo.id)}
										type="checkbox"
									/>
									<span className="slider round"></span>
								</label>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
