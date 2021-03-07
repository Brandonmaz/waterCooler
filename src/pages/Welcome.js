import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CredentialsContext } from "../App";
import Todos from "../components/Todos";
import "./Welcome.css";
import logo from "../design/logo/logo_nobackgound.svg";
import background from "../design/images/watercooler_main.jpg";
export default function Welcome() {
	const [credentials, setCredentials] = useContext(CredentialsContext);
	const logout = () => {
		setCredentials(null);
	};

	return (
		<div className="body">
			<img className="glass" src={logo} alt="icon" />
			<h1 className="welcome">
				water cooler {credentials && credentials.username}
			</h1>
			<p className="welcomeP">daily good habit reminders</p>
			<button className="welcomeButton">
				{!credentials && (
					<Link className="welcomeRegister" to="/register">
						let's get started
					</Link>
				)}
			</button>

			<br />
			<div className="signinContainer">
				<p className="member">Already a member?</p>
				{!credentials && (
					<Link className="welcomeLogin" to="/login">
						Sign in
					</Link>
				)}
			</div>
			{credentials && <button onClick={logout}>Logout</button>}
			{credentials && <Todos />}
		</div>
	);
}
