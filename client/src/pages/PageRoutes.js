import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import SearchPage from './SearchPage/SearchPage';
import CreateStory from './CreateStory/CreateStory';

const PageRoutes = () => {

return (
	<>
	<Routes>
		<Route path="/" element={<HomePage/>}/>
		<Route path="/create-story" element={<CreateStory/>}/>
	</Routes>
	</>
);

}

export default PageRoutes;