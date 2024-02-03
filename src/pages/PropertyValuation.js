import React from 'react';
import ContactButton from '../components/ContactButton';
import CustomForm from '../components/CustomForm';
import CompanyCard from '../components/CompanyCard';
import { FaWhatsapp } from 'react-icons/fa';

const PropertyValuation = () => {
	return (
		<div className='propertypage-container'>
			<div className='propertypage-landing-container itrpage-landing-container'>
				<h1>Property Valuation for VISA</h1>
				<p>
					Are you in search of a Property Valuation Certificate for your VISA?
					At Prime File Advisors, we offer Property Valuation Report Services,
					ensuring you receive the valuation report for your property, whether
					it's a house, flat, apartment, land, agriculture land, building, or
					office, within 4 hours.
				</p>
				<ContactButton
					name='+91 9876660279'
					icon={<FaWhatsapp />}
					url='https://wa.me/919876660279'
				/>
				<h2>Are you interested in Property Valuation Report?</h2>
				<div className='itrpage-landing-form'>
					<CustomForm Horizontal />
				</div>
			</div>
			<div className='propertypage-certificate-container'>
				<h2>Property Valuation Certificate for VISA</h2>
				<div className='propertypage-certificate-details'>
					<CompanyCard />
					<div className='propertypage-certificate-text'>
						<p>
							Welcome to Prime File Advisors, where we are dedicated to
							assisting you in obtaining a Property Valuation Certificate for
							your VISA application. Our team provides property valuation within
							4 hours upon receiving all necessary documents from the customer.
						</p>
						<p>
							The uses of the Property Valuation Report include convincing the
							Embassy Panel that the VISA applicant possesses financial
							worthiness, demonstrating substantial investments or assets in the
							home country as an incentive to return after the temporary stay
							abroad, and facilitating the process of obtaining a bank loan.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PropertyValuation;
