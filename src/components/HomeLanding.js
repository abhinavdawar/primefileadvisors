import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactButton from '../components/ContactButton';
import CustomForm from '../components/CustomForm';
import {
	FaWhatsapp,
	FaGlobeAmericas,
	FaCalendarCheck,
	FaCcVisa,
} from 'react-icons/fa';
import { MdMiscellaneousServices } from 'react-icons/md';
import ServicesPopup from './ServicesPopup';

const HomeLanding = () => {
	const [popup, setPopup] = useState(false);
	return (
		<div className='homelanding-container'>
			<h1>Welcome to, Prime File Advisors</h1>
			<p>
				We are Prime File Advisors, Best Consultants providing Property
				Valuation, Net Worth Valuation by Certified Chartered Accountant, Income
				Tax Filling services Across India.
			</p>
			<ContactButton
				name='+91 9876660279'
				icon={<FaWhatsapp />}
				url='https://wa.me/919876660279'
			/>
			<div className='homelanding-services-container'>
				<h2>Prime File Advisor’s Trending Services </h2>
				<div className='homelanding-services'>
					<Link to='/property-valuation' className='homelanding-service'>
						<i>
							<FaGlobeAmericas />
						</i>
						<h4>Property Valuation</h4>
					</Link>
					<Link to='/ca-valuation' className='homelanding-service'>
						<i>
							<FaCcVisa />
						</i>
						<h4>CA Valuation</h4>
					</Link>
					<Link to='/income-tax-return' className='homelanding-service'>
						<i>
							<FaCalendarCheck />
						</i>
						<h4>ITR Filling</h4>
					</Link>
					<button
						onClick={() => setPopup(true)}
						className='homelanding-service'
					>
						<i>
							<MdMiscellaneousServices />
						</i>
						<h4>Other Services</h4>
					</button>
				</div>
			</div>
			<ServicesPopup popup={popup} setPopup={setPopup} />
			<div className='homelanding-form'>
				<h2>Consult With Prime File Advisor Expert</h2>
				<CustomForm Horizontal />
			</div>
		</div>
	);
};

export default HomeLanding;
