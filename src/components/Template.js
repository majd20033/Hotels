import React from "react";
import "./Template.css";
const Template = () => {
	return (
		<div className="template">
			<input type="text" placeholder="Location" />
			<input type="text" placeholder="Stay Dates" />
			<input type="text" placeholder="Guests" />
			<input type="text" placeholder="Nationality" />
			<ul>
				<li> Where are you going </li>
				<li> Add Date </li>
				<li> Add Guests </li>
				<li> Add Nationality</li>
			</ul>

			<svg
				viewBox="0 0 512 512"
				fill="currentColor"
				width="3.5em"
				// height="1em"
			>
				<path d="M256 64C150.13 64 64 150.13 64 256s86.13 192 192 192 192-86.13 192-192S361.87 64 256 64zm91.31 283.31a16 16 0 01-22.62 0l-42.84-42.83a88.08 88.08 0 1122.63-22.63l42.83 42.84a16 16 0 010 22.62z" />
				<path d="M288 232 A56 56 0 0 1 232 288 A56 56 0 0 1 176 232 A56 56 0 0 1 288 232 z" />
			</svg>
		</div>
	);
};

export default Template;
