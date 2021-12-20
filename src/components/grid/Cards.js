import React from "react";

export default function Cards({ info }) {
	const { imageUrl, fullName, id } = info;
	console.log(info);
	return (
		<div className="card" key={id}>
			<img src={imageUrl} alt="GOT Character" />
			<div>{fullName}</div>
		</div>
	);
}
