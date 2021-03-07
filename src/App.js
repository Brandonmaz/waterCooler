import React, { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Todos from "./components/Todos";

export const CredentialsContext = React.createContext();

function App() {
	const credentialsState = useState(null);

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
					</Switch>
				</Router>
			</CredentialsContext.Provider>
		</div>
	);
}

export default App;
