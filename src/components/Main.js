import React from "react";
import Grid from "./grid/Grid";
import BestScore from "./score/BestScore";
import CurrentScore from "./score/CurrentScore";

export default function Main() {
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
