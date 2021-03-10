import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { CredentialsContext } from "../App";

import { Link } from "react-router-dom";
import "./Login.css";
import google from "../design/icons/googlelogo.svg";

export const handleErrors = async (response) => {
	if (!response.ok) {
		const { message } = await response.json();
		throw Error(message);
	}
	return response.json();
};

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	// const [user, setUser] = useState();
	const [error, setError] = useState("");
	const [, setCredentials] = useContext(CredentialsContext);

	const login = (e) => {
		e.preventDefault();
		// const user = {username, password};
		fetch(`https://afternoon-everglades-00122.herokuapp.com/login/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username,
				password,
			}),
		})
			.then(handleErrors)
			.then(() => {
				setCredentials({
					username,
					password,
				});
				history.push("/onboarding1");
			})
			.catch((error) => {
				setError(error.message);
			});
		// setUser(response.data);
		// localStorage.setItem('user', response.data);
		// console.log(response.data);
	};

	const history = useHistory();

	// if (user) {
	// 	return <div>{user.name} is logged in</div>
	// }

	return (
		<div className="logincontainer">
			<div className="LoginDiv">
				<h1 className="signinlogin">Sign In</h1>
				{error && <span style={{ color: "red" }}>{error}</span>}
				<form onSubmit={login}>
					<p className="emaillogin">Email</p>
					<input
						className="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						// placeholder="username"
					/>
					<br />
					<p className="passwordlogin">Password</p>
					<input
						className="password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						// placeholder="password"
					/>
					<br />
					<p className="forgotpassword">Forgot password?</p>
					<button className="signinbutton" type="submit">
						Sign in
					</button>
					<p className="donthave">
						Already have an account?{" "}
						<Link className="signinLink" to="/register">
							Sign up
						</Link>
					</p>{" "}
					<p className="ptagor">Or</p>
					<button className="logingoogle">
						<img className="googlelogo" src={google} alt="Google Logo" />
						<p>Continue with Google</p>
					</button>
				</form>
			</div>
		</div>
	);
}
