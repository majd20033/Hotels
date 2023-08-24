import React from "react";
import "./Nav.css";
const Nav = () => {
	return (
		<nav className="nav">
			<ul>
				<li>English</li>
				<li>Usd</li>
				<li>
					<svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
						<path d="M18 15H6l-4 4V3a1 1 0 011-1h15a1 1 0 011 1v11a1 1 0 01-1 1m5-6v14l-4-4H8a1 1 0 01-1-1v-1h14V8h1a1 1 0 011 1M8.19 4c-.87 0-1.57.2-2.11.59-.52.41-.78.98-.77 1.77l.01.03h1.93c.01-.3.1-.53.28-.69a1 1 0 01.66-.23c.31 0 .57.1.75.28.18.19.26.45.26.75 0 .32-.07.59-.23.82-.14.23-.35.43-.61.59-.51.34-.86.64-1.05.91C7.11 9.08 7 9.5 7 10h2c0-.31.04-.56.13-.74.09-.18.26-.36.51-.52.45-.24.82-.53 1.11-.93.29-.4.44-.81.44-1.31 0-.76-.27-1.37-.81-1.82C9.85 4.23 9.12 4 8.19 4M7 11v2h2v-2H7m6 2h2v-2h-2v2m0-9v6h2V4h-2z" />
					</svg>
					Support
				</li>

				<li>
					<svg
						viewBox="0 0 1024 1024"
						fill="currentColor"
						height="1em"
						width="1em">
						<path d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z" />
					</svg>
					Log Out
				</li>
			</ul>
		</nav>
	);
};

export default Nav;