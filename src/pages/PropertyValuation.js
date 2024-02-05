import React from 'react';
import ContactButton from '../components/ContactButton';
import CustomForm from '../components/CustomForm';
import CompanyCard from '../components/CompanyCard';
import { PropertySummaryDataArr } from '../components/ServicesData';
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
				<h2>
					The checklist of documents required for Property Valuation varies
					based on the type of property
				</h2>
				<div className='propertypage-summary-details'>
					{PropertySummaryDataArr.map((item, index) => (
						<div key={index} className='propertypage-summary-detail'>
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
			{/* <section id='cd-timeline' class='cd-container'>
				<div class='cd-timeline-block'>
					<div class='cd-timeline-img cd-picture'></div>
					<div class='cd-timeline-content'>
						<h2>Title of section 2</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
							optio, dolorum provident rerum aut hic quasi placeat iure tempora
							laudantium ipsa ad debitis unde?
						</p>
						<span class='cd-date'>Step 1</span>
					</div>
				</div>
				<div class='cd-timeline-block'>
					<div class='cd-timeline-img cd-picture'></div>
					<div class='cd-timeline-content'>
						<h2>Title of section 2</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
							optio, dolorum provident rerum aut hic quasi placeat iure tempora
							laudantium ipsa ad debitis unde?
						</p>
						<span class='cd-date'>Step 2</span>
					</div>
				</div>
				<div class='cd-timeline-block'>
					<div class='cd-timeline-img cd-picture'></div>
					<div class='cd-timeline-content'>
						<h2>Title of section 2</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
							optio, dolorum provident rerum aut hic quasi placeat iure tempora
							laudantium ipsa ad debitis unde?
						</p>
						<span class='cd-date'>Step 3</span>
					</div>
				</div>
			</section> */}
		</div>
	);
};

export default PropertyValuation;
