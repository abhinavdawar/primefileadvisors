import React from 'react';
import ContactButton from '../components/ContactButton';
import CustomForm from '../components/CustomForm';
import { FaWhatsapp } from 'react-icons/fa';
const HomeLanding = () => {
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
			<div className='homelanding-form'>
				<h2>Consult With Prime File Advisor Expert</h2>
				<CustomForm Horizontal />
			</div>
		</div>
	);
};

export default HomeLanding;
