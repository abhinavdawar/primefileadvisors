import './App.css';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Navbar />
				<Routes>
					<Route exact path='/' element={<Homepage />}></Route>
					<Route exact path='/about' element={<About />}></Route>
					<Route exact path='/contact' element={<Contact />}></Route>
					<Route exact path='/faq' element={<FAQ />}></Route>
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
