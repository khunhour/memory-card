import React, { useState, useEffect } from "react";
import CardsContainer from "./grid/CardsContainer";
import BestScore from "./scoreboard/BestScore";
import CurrentScore from "./scoreboard/CurrentScore";
import shuffleArray from "./helperFunction/shuffleArray";

export default function Main() {
	const [currentScore, setCurrentScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [selectedCards, setSelectedCards] = useState([]);
	const [images, setImages] = useState([]);

	// set initial state to api componentDidMount
	useEffect(() => {
		const fetchedData = async () => {
			const data = await fetch(
				"https://thronesapi.com/api/v2/Characters"
			).then((res) => res.json());
			setImages(data.slice(0, 15));
		};
		fetchedData();
	}, []);

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
		if (!e.target.closest(".card")) return;

		const id = e.target.closest(".card").id;
		if (selectedCards.includes(id)) {
			// game end
			setCurrentScore(0);
			setSelectedCards([]);
		} else {
			// update scoreboard
			setSelectedCards((prevValues) => [...prevValues, id]);
			setCurrentScore(currentScore + 1);
		}
	};
	const shufflePeople = shuffleArray(images);
	if (images) {
	} else {
		return <div>Loading</div>;
	}
	return (
		<main>
			<div>
				Get points by clicking on GOT characters no more than once!{" "}
			</div>
			<div className="scoreboard">
				<CurrentScore currentScore={currentScore} />
				<BestScore bestScore={bestScore} />
			</div>
			{shufflePeople ? <CardsContainer people={shufflePeople} /> : null}
		</main>
	);
}
