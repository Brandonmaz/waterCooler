import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CredentialsContext } from "../App";
import "./Onboarding1.css";
import "../design/Poppins_font/Poppins-Bold.ttf";
import "../design/Poppins_font/Poppins-Regular.ttf";

export default function Onboarding1() {
	return (
		<div className="onboarding-master">
			<div className="onboarding-container">
				<div className="onboarding-hero">
					<h1>What do you want to focus on?</h1>
					<p>Select all that apply.</p>
				</div>
				<div className="onboarding-grid-container">
					<div className="onboarding-grid-item item1">Staying Active</div>
					<div className="onboarding-grid-item item2">Productivity</div>
					<div className="onboarding-grid-item item3">Mindfulness</div>
					<div className="onboarding-grid-item item4">Health</div>
				</div>
				<div className="onboarding-button-container">
					<Link to="/todos">
						<button className="onboarding-button">Next</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
