import React, { useState, useContext, useEffect } from "react";
// import { CredentialsContext } from "../App";
// import { v4 as uuidv4 } from "uuid";
import logo from "../design/logo/logo_nobackgound.svg";
import "./Account.css";
import { Link } from "react-router-dom";

export default function Account() {
	const [user, setUser] = useState();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	// useEffect(() => {
	// 	const loggedInUser = localStorage.getItem("user");
	// 	if (loggedInUser) {
	// 		const foundUser = JSON.parse(loggedInUser);
	// 		setUser(foundUser);
	// 	}
	// }, []);
	// const [account, setAccount] = useState([]);
	// 	useEffect(() => {
	// 			fetch(`https://afternoon-everglades-00122.herokuapp.com/`, {
	// 				method: "GET",
	// 				headers: {
	// 					"Content-Type": "application/json",
	// 					Authorization: `Basic ${credentials.username}:${credentials.password}`,
	// 				},
	// 			})
	// 				.then((response) => response.json())
	// 				.then((todos) => setTodos(todos));
	// 		}, []);

	const handleLogout = () => {
		setUser({});
		setUsername("");
		setPassword("");
		sessionStorage.clear();
	}

	// if (user) {
	// 	return (
	// 		<div>
	// 			{user.name} is logged in user
	// 			<button onClick={}>Logout</button>
	// 		</div>
	// 	);
	// }

	return (
		<div className=" accountBody">
			<div className="accountNavbar">
				<button className="accountHome">
					<img className="accountGlass" src={logo} alt="icon" />
				</button>
				<div className="buttonToggle">
					<button className="remindersBtn">Reminders</button>
					<button className="accountBtn">Account</button>
				</div>
			</div>
			<h1 className="accountTitle">Account</h1>
			<div className="accountInfoBox">
				<div className="accountInfo">
					<form className="accountForm">
						<div className="accountInfoFormText">
							<h2 className="accountNames">Name</h2>
							<input placeholder="name" />
							<br />
							<h2 className="accountNames">Password</h2>

							<input type="password" placeholder="password" />
						</div>
						<br />
						<Link className="accountRegister" to="/register">
							change password
						</Link>
						<br />
						<button className="accountSubmitBtn" type="submit" onClick={handleLogout}>
							Sign out
						</button>
					</form>
				</div>
				<div className="notificationInfo">
					<h2 className="notifactionSwitch">Notification Switch*</h2>
					<div className="statusClick">
						<p className="statusP">Notification Status</p>
						<label class="switch">
							<input type="checkbox" />
							<span class="slider round"></span>
						</label>
					</div>
					<p className="accountStatusInfo">
						*Flip this switch at the end of the day to stop notificiations
					</p>
				</div>
			</div>
		</div>
	);
}
