import React, { useEffect, useState } from "react";

export default function Grid() {
	const [images, setImages] = useState(null);
	// initial state to api componentDidMount
	useEffect(() => {
		const fetchedData = async () => {
			const data = await fetch(
				"https://thronesapi.com/api/v2/Characters"
			).then((res) => res.json());
			console.log(data);
			setImages(data);
		};
		fetchedData();
	}, []);
	console.log(images);

	if (images) {
		console.log(images);
		return (
			<div>
				<img src={images[0].imageUrl} alt="GOT char" />
			</div>
		);
	} else {
		return <div>Loading</div>;
	}
}
