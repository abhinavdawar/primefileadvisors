import React, { useEffect } from 'react';
import ContactButton from '../components/ContactButton';
import CustomForm from '../components/CustomForm';
import CompanyCard from '../components/CompanyCard';
import PropertyTimeline from '../components/PropertyTimeline';
import GoogleReviews from '../components/GoogleReviews';
import {
	PropertySummaryDataArr,
	PropertyDocumentsDataArr,
} from '../components/ServicesData';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import HorizontalTimeline from '../components/HorizontalTimeline';

const PropertyValuation = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<motion.div
			className='propertypage-container'
			initial={{ width: '0' }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
		>
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
			<div className='propertypage-doc-requirments-container itrpage-landing-container'>
				<h2>Why Property Document required for Valuation?</h2>
				<p>
					For Assessing Property Valuation as on latest date, we need exact
					location of property, Area of property or land, Building Construction
					year. Further, to make valuation report for various purpose we have to
					check ownership of premises or land. for those reasons we need
					property documents. Also it is mandatory to check all the Documents
					for Property Valuation.
				</p>
			</div>
			<div className='propertypage-summary-container div-container'>
				<h2>Property Valuation Document Requirements</h2>
				<p className='propertypage-summary-end'>
					When it comes to property valuation, there are several important
					documents that are required to determine the accurate value and
					Ownership of the property. These documents provide crucial information
					that helps in assessing the latest market value of the property, and
					they include:
				</p>
				<div className='propertypage-summary-details'>
					{PropertyDocumentsDataArr.map((item, index) => (
						<div key={index} className='propertypage-summary-detail'>
							<span className='propertypage-summary-detail-title'>
								{item.title}
							</span>{' '}
							<span>{item.text}</span>
						</div>
					))}
				</div>
			</div>
			<div className='propertypage-summary-container div-container'>
				<h2>
					The checklist of documents required for Property Valuation varies
					based on the type of property
				</h2>
				<div className='propertypage-summary-details1'>
					{PropertySummaryDataArr.map((item, index) => (
						<div key={index} className='propertypage-summary-detail1'>
							<span className='propertypage-summary-detail-title'>
								{item.title}
							</span>{' '}
							<span>{item.text}</span>
						</div>
					))}
				</div>
				<p className='propertypage-summary-end'>
					By ensuring you have the necessary documents in place, we can expedite
					the Property Valuation process for your convenience.
				</p>
			</div>
			<div className='timeline-mobile-view'>
				<PropertyTimeline />
			</div>
			<div className='timeline-screen-view'>
				<HorizontalTimeline />
			</div>
			<GoogleReviews />
		</motion.div>
	);
};

export default PropertyValuation;
