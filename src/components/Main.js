import React, { useState, useEffect } from "react";
import Grid from "./grid/Grid";
import BestScore from "./score/BestScore";
import CurrentScore from "./score/CurrentScore";

export default function Main() {
	const [currentScore, setCurrentScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);

	// update best score
	useEffect(() => {
		if (bestScore < currentScore) {
			setBestScore(currentScore);
		}
	}, [currentScore, bestScore]);

	useEffect(() => {
		document.addEventListener("click", handleClick);
		return () => {
			document.removeEventListener("click", handleClick);
		};
	});

	const handleClick = () => {
		console.log("sth");
	};

	return (
		<main>
			<div>
				<CurrentScore currentScore={currentScore} />
				<BestScore bestScore={bestScore} />
			</div>
			<div>
				<Grid />
			</div>
		</main>
	);
}
