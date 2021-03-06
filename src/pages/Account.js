import React, { useState, useContext, useEffect } from "react";
import { CredentialsContext } from "../App";
// import { v4 as uuidv4 } from "uuid";
import logo from "../design/logo/logo_nobackgound.svg";
import "./Account.css";
import { Link } from "react-router-dom";

export default function Account() {
	const [user, setUser] = useState();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [credentials, setCredentials] = useContext(CredentialsContext);
	const logout = () => {
		setCredentials(null);
	};
	const handleLogout = () => {
		setUser({});
		setUsername("");
		setPassword("");
		sessionStorage.clear();
	};

	return (
		<div className=" accountBody">
			<div className="accountNavbar">
				<button className="accountHome" onClick={handleLogout}>
					<Link to="/">
						<img className="accountGlass" src={logo} alt="icon" />
					</Link>
				</button>
				<div className="buttonToggle">
					<button className="remindersBtn">
						<Link className="remindersBtn" to="/todos">
							Reminders
						</Link>
					</button>
					<button className="accountBtn accountAcc">
						<Link className="remindersBtn" to="/account">
							Account
						</Link>
					</button>
				</div>
			</div>
			<h1 className="accountTitle">Account</h1>
			<div className="accountInfoBox">
				<div className="accountInfo">
					<form className="accountForm">
						<div className="accountInfoFormText">
							<h2 className="accountNames">Name</h2>
							<div className="accountEdit">
								<input
									type="text"
									placeholder={credentials && credentials.username}
								/>
								<a href="#">edit</a>
							</div>
							<br />
							<h2 className="accountNames">Password</h2>
							<div className="accountEdit">
								<input type="password" placeholder="***********" />
								<a href="#">edit</a>
							</div>

							<br />
							<Link className="accountRegister" to="/register">
								change password
							</Link>
							<br />
						</div>
						<button
							className="accountSubmitBtn"
							type="submit"
							onClick={handleLogout}
						>
							<Link to="/login">{!credentials && "Sign In"}</Link>
							{credentials && "Sign Out"}
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
