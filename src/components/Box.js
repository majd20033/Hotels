import React from "react";
import "./Box.css";
const Box = () => {
	return (
		<div className="box">
			<span>
				<h1>Account Detail</h1> <br></br> <p> Balance Available:1000USD </p>{" "}
			</span>
			<span>
				<h1> Orders </h1> <br></br> <p> Complete booking :5 </p>{" "}
			</span>
		</div>
	);
};

export default Box;
