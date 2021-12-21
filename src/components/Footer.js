import React from "react";
import githubPic from "../../src/images/github.png";
export default function Footer() {
	return (
		<footer>
			<span>2021 &copy; khunhour</span>
			<a href="https://github.com/khunhour/cv-project">
				<img src={githubPic} alt="github" />
			</a>
		</footer>
	);
}
