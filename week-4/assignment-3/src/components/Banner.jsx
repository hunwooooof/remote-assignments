import { useState } from 'react';


function Banner() {
	const [title, setTitle] = useState("It's Her Shot!");
	const handleClickTitle = (e) => {
		if (title === "It's Her Shot!") {
			setTitle("Have a Good Time!");
		} else {
			setTitle("It's Her Shot!");
		}
	}

	return (
		<div className="container">
			<div className="banner">
				<h1 className="banner-title" onClick={handleClickTitle}>{title}</h1>
			</div>
		</div>
	)
}

export default Banner;