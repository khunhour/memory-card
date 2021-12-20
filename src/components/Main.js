import React, { useState, useEffect } from "react";
import CardsContainer from "./grid/CardsContainer";
import BestScore from "./score/BestScore";
import CurrentScore from "./score/CurrentScore";

export default function Main() {
	const [currentScore, setCurrentScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [selectedCards, setSelectedCards] = useState([]);
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

	const handleClick = (e) => {
		const id = e.target.closest(".card").id;
		if (selectedCards.includes(id)) {
			// game end
			setCurrentScore(0);
			setSelectedCards([]);
		} else {
			setSelectedCards((prevValues) => [...prevValues, id]);
			setCurrentScore(currentScore + 1);
		}
	};

	return (
		<main>
			<div>
				<CurrentScore currentScore={currentScore} />
				<BestScore bestScore={bestScore} />
			</div>
			<CardsContainer />
		</main>
	);
}
