import React from "react";
import "./LeftBar.css";
import logo from "../components/logo.jpg";

const LeftBar = () => {
	return (
		<div className="logo">
			<img src={logo} alt="" />
			<ul>
				<li id="noback"> Search </li>
				<li> Manage Orders </li>
				<li> Reporting </li>
				<li> Agent Profile </li>
			</ul>
		</div>
	);
};

export default LeftBar;
