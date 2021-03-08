import React, { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Onboarding1 from "./pages/Onboarding1";

import Todos from "./components/Todos";
<<<<<<< HEAD


=======
import Account from "./pages/Account";
>>>>>>> ae6433b7d1cfab10ec7c0d0c27f70309409c7793
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
<<<<<<< HEAD
						<Route exact path="/onboarding">
							<Onboarding1 />
=======
						<Route exact path="/account">
							<Account />
>>>>>>> ae6433b7d1cfab10ec7c0d0c27f70309409c7793
						</Route>
					</Switch>
				</Router>
			</CredentialsContext.Provider>
		</div>
	);
}

export default App;
