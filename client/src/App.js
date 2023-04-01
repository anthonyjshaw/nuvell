import React from 'react';
import PageRoutes from './pages/PageRoutes';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';


const App = () => {
	return (
		<>
			<Navbar />
			<PageRoutes/>
			<Sidebar/>
		</>
	);
}

export default App;