import React from "react";

export default function Cards({ info }) {
	const { imageUrl, firstName, lastName, id } = info;
	return (
		<div className="card" key={id} id={id}>
			<img src={imageUrl} alt="GOT Character" />
			<div>{firstName}</div>
			<div>{lastName}</div>
		</div>
	);
}
