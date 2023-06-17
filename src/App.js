import './App.css';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';

import Navbar from './components/Navbar';
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
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
