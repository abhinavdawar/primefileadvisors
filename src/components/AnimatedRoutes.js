import React from 'react';
import Homepage from '../pages/Homepage';
import About from '../pages/About';
import Contact from '../pages/Contact';
import FAQ from '../pages/FAQ';
import NetWorthCertificate from '../pages/NetWorthCertificate';
import PropertyValuationCertficate from '../pages/PropertyValuationCertficate';
import ITR from '../pages/ITR';
import { Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
	const location = useLocation();
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route exact path='/' element={<Homepage />}></Route>
				<Route exact path='/about' element={<About />}></Route>
				<Route exact path='/contact' element={<Contact />}></Route>
				<Route exact path='/faq' element={<FAQ />}></Route>
				<Route exact path='/income-tax-return' element={<ITR />}></Route>
				<Route
					exact
					path='/net-worth-certificate'
					element={<NetWorthCertificate />}
				></Route>
				<Route
					exact
					path='/property-valuation-certificate'
					element={<PropertyValuationCertficate />}
				></Route>
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
