import React from "react";

export default function Cards({ info }) {
	const { imageUrl, fullName, id } = info;
	return (
		<div className="card" key={id} id={id}>
			<img src={imageUrl} alt="GOT Character" />
			<div>{fullName}</div>
		</div>
	);
}
