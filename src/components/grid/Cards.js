import React from "react";

export default function Cards({ person }) {
	const { imageUrl, firstName, lastName, id } = person;
	return (
		<div className="card" key={id} id={id}>
			<img src={imageUrl} alt="GOT Character" />
			<div>{firstName}</div>
			<div>{lastName}</div>
		</div>
	);
}
