import React from 'react';
import Homepage from '../pages/Homepage';
import ContactPage from '../pages/ContactPage';
import FAQ from '../pages/FAQ';
import CAValuation from '../pages/CAValuation';
import PropertyValuation from '../pages/PropertyValuation';
import ITRPage from '../pages/ITRPage';
import SampleFormat from '../pages/SampleFormat';
import { Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
	const location = useLocation();
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route exact path='/' element={<Homepage />}></Route>
				<Route exact path='/contact-us' element={<ContactPage />}></Route>
				<Route exact path='/faq' element={<FAQ />}></Route>
				<Route exact path='/income-tax-return' element={<ITRPage />}></Route>
				<Route exact path='/ca-valuation' element={<CAValuation />}></Route>
				<Route
					exact
					path='/property-valuation'
					element={<PropertyValuation />}
				></Route>
				<Route exact path='/sample-format' element={<SampleFormat />}></Route>
				<Route path='*' element={<Homepage />} />
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
