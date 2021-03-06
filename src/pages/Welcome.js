import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CredentialsContext } from "../App";
import Todos from "../components/Todos";
import "./Welcome.css";
// import background from "../design/images/watercooler_main.jpg";
export default function Welcome() {
	const [credentails, setCredentials] = useContext(CredentialsContext);
	const logout = () => {
		setCredentials(null);
	};

	return (
		<div className="body">
			<h1 className="welcome">
				Watercooler {credentails && credentails.username}
			</h1>
			<p className="welcomeP">daily good habit reminders</p>
			<button className="welcomeButton">
				{!credentails && (
					<Link className="welcomeRegister" to="/register">
						Let's get started
					</Link>
				)}
			</button>

			<br />
			{!credentails && <Link to="/login">Login</Link>}
			{credentails && <button onClick={logout}>Logout</button>}
			{credentails && <Todos />}
		</div>
	);
}
