import React from "react";
import "./Words.css";
const Words = () => {
	return (
		<div className="words">
			<span>
				<h1>
					{" "}
					<i> Hello, </i> Fatima Travel{" "}
				</h1>
				<svg
					id="move"
					fill="currentColor"
					viewBox="0 0 16 16"
					// height="1em"
					width="7em">
					<path d="M8 16A8 8 0 108 0a8 8 0 000 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 01.683.183A3.498 3.498 0 008 11.5a3.498 3.498 0 003.032-1.75.5.5 0 11.866.5A4.498 4.498 0 018 12.5a4.498 4.498 0 01-3.898-2.25.5.5 0 01.183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />
				</svg>
				<p>
					{" "}
					<i> Let's </i> search for the best prices and much much more!
				</p>
			</span>
			<span className="table">
				<ul>
					<li></li>
					<li></li>
					<li></li>
				</ul>
				<ul>
					<li></li>
					<li></li>
					<li>
						<svg
							viewBox="0 0 512 512"
							fill="currentColor"
							width="1.5em"
							// height="1em"
						>
							<path d="M256 64C150.13 64 64 150.13 64 256s86.13 192 192 192 192-86.13 192-192S361.87 64 256 64zm91.31 283.31a16 16 0 01-22.62 0l-42.84-42.83a88.08 88.08 0 1122.63-22.63l42.83 42.84a16 16 0 010 22.62z" />
							<path d="M288 232 A56 56 0 0 1 232 288 A56 56 0 0 1 176 232 A56 56 0 0 1 288 232 z" />
						</svg>
						Search
					</li>
				</ul>
			</span>
		</div>
	);
};

export default Words;
