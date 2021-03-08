import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { CredentialsContext } from "../App";

import { Link } from "react-router-dom";
import './Login.css'
import google from '../design/icons/googlelogo.svg'

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
	const [error, setError] = useState("");
	const [, setCredentials] = useContext(CredentialsContext);

	const login = (e) => {
		e.preventDefault();
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
				history.push("/todos");
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	const history = useHistory();

	return (
<<<<<<< HEAD
		<div className="login-box">
			<h2>Login</h2>
			{error && <span style={{ color: "red" }}>{error}</span>}
			<form onSubmit={login}>
				<input
					onChange={(e) => setUsername(e.target.value)}
					placeholder="username"
				/>
				<br />
				<input
					type="password"
					onChange={(e) => setPassword(e.target.value)}
					placeholder="password"
				/>
				<br />
				<button type="submit">Login</button>
			</form>
		</div>
	);
=======

    <div className="logincontainer">
      <div className="LoginDiv">
        <h1 className="signinlogin">Sign In</h1>
        {error && <span style={{ color: "red" }}>{error}</span>}
        <form onSubmit={login}>
			<p className="emaillogin">Email</p>
          <input
            className="username"
            onChange={(e) => setUsername(e.target.value)}
            // placeholder="username"
          />
          <br />
		  <p className="passwordlogin">Password</p>
          <input
            className="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            // placeholder="password"
          />
          <br />
		  <p className="forgotpassword">Forgot password?</p>
          <button className="signinbutton" type="submit">Sign in</button>
		  <p className='donthave'>Don't have an account? <span className='signinspan'>Sign up</span></p>
		  <p className="ptagor">Or</p>
		  <button className="logingoogle">
			  <img className="googlelogo" src={google} alt="Google Logo" />
			  <p>Continue with Google</p></button>
        </form>
      </div>
    </div>
  );

>>>>>>> 32e6815e90b41984fe12e576fa79677dcad3e916
}
