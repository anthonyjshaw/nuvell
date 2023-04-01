import React, { useEffect, useState } from 'react';


const HomePage = () => {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [stories, setStories] = useState([])

	useEffect(() => {
		fetch('https://strangerthings-quotes.vercel.app/api/quotes')
		.then(res => res.json())
		.then(data => {
			setIsLoaded(true);
			setStories(data);
		}, (error) => {
			setIsLoaded(true);
			setError(error);
		})
	}, []);
	if (error) {
		return <div>Error: {error.message}</div>
	} else if (!isLoaded) { 
		return <div>Loading...</div>
	} else {
		const mappedStories = stories.map(e => {
			return <li key={e}>{e.quote}</li>;
		})
		 return (
		<>
			<h1>Homepage</h1>
			<ul>{mappedStories}</ul>
		</>
	)
	}
}

export default HomePage;