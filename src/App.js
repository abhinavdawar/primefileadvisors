import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Navbar />
				<AnimatedRoutes />
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
