import React, { useState, useEffect } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Onboarding1 from "./pages/Onboarding1";

import Todos from "./components/Todos";
import Account from "./pages/Account";
export const CredentialsContext = React.createContext();

function App() {
	const credentialsState = useState(null);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [user, setUser] = useState();

	// useEffect(() => {
	// 	const loggedInUser = sessionStorage.getItem("user");
	// 	if (loggedInUser) {
	// 		const foundUser = JSON.parse(loggedInUser);
	// 		setUser(foundUser);
	// 	}
	// }, []);

	return (
		<div className="App">
			<CredentialsContext.Provider value={credentialsState}>
				<Router>
					<Switch>
						<Route exact path="/">
							<Welcome />
						</Route>
						<Route exact path="/register">
							<Register />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/todos">
							<Todos />
						</Route>
						<Route exact path="/account">
							<Account />
						</Route>
						<Route exact path="/onboarding1">
							<Onboarding1 />
						</Route>
					</Switch>
				</Router>
			</CredentialsContext.Provider>
		</div>
	);
}

export default App;
