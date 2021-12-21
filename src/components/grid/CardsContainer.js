import React from "react";

import Cards from "./Cards";

export default function CardsContainer({ people }) {
	if (people) {
		return (
			<div className="cards-container">
				{people.map((person) => {
					return <Cards person={person} key={person.id} />;
				})}
			</div>
		);
	} else {
		return <div>Loading</div>;
	}
}
