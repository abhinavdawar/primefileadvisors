import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import ContactPopup from './components/ContactPopup';
import { useEffect, useState } from 'react';

function App() {
	const [popup, setPopup] = useState(false);

	useEffect(() => {
		setPopup(true);
	}, []);

	return (
		<BrowserRouter>
			<div className='App'>
				<ContactPopup popup={popup} />
				<Navbar />
				<AnimatedRoutes />
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
