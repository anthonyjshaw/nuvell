import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
	const navbarItems = [{title: 'Home', link: "/"}, {title: 'Create a story', link: '/create-story'}].map(e => {
		return <div><Link to={e.link}>{e.title}</Link></div>
	})
	return (
		<div>
			{navbarItems}
		</div>
	);
}

export default Navbar;