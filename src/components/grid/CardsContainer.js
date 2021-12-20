import React, { useEffect, useState } from "react";
import Cards from "./Cards";

export default function CardsContainer() {
	const [images, setImages] = useState(null);
	// set initial state to api componentDidMount
	useEffect(() => {
		const fetchedData = async () => {
			const data = await fetch(
				"https://thronesapi.com/api/v2/Characters"
			).then((res) => res.json());
			setImages(data.slice(0, 14));
		};
		fetchedData();
	}, []);

	if (images) {
		return (
			<div>
				{images.map((image) => {
					return <Cards info={image} />;
				})}
			</div>
		);
	} else {
		return <div>Loading</div>;
	}
}
