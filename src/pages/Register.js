import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { CredentialsContext } from "../App";
import { handleErrors } from "./Login";
import google from "../design/icons/googlelogo.svg";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Register() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [, setCredentials] = useContext(CredentialsContext);
	const [user, setUser] = useState();

	const register = (e) => {
		e.preventDefault();
		const user = { username, password };
		fetch(`https://afternoon-everglades-00122.herokuapp.com/`, {
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
				history.push("/");
			})
			.catch((error) => {
				setError(error.message);
			});

		setUser(register.data);
		sessionStorage.setItem("user", JSON.stringify(register.data));
	};

	const history = useHistory();

	return (
		<div className="registercontainer">
			<div className="RegisterDiv">
				<h1 className="signinlogin">Sign up</h1>
				{error && <span style={{ color: "red" }}>{error}</span>}
				<form onSubmit={register}>
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
					<p className="forgotpassword">{/* placeholder dont delete  */}</p>

					<button className="signinbutton" type="submit">
						Sign up
					</button>
					<p className="donthave">
						Already have an account?{" "}
						<Link className="signinLink" to="/login">
							Sign in
						</Link>
					</p>
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
