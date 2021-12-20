import React from "react";
import Grid from "./grid/Grid";
import BestScore from "./score/BestScore";
import CurrentScore from "./score/CurrentScore";

export default function Main() {
	const [currentScore, useCurrentScore] = useState(0);
	const [bestScore, useBestScore] = useState(0);
	return (
		<main>
			<div>
				<CurrentScore />
				<BestScore />
			</div>
			<div>
				<Grid />
			</div>
		</main>
	);
}
