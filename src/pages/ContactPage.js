import React from 'react';
import CustomLink, { contactLinkArr } from '../components/CustomLink';
import CustomForm from '../components/CustomForm';

const ContactPage = () => {
	return (
		<div className='contactpage-container itrpage-container'>
			<div className='contactpage-landing-container itrpage-landing-container'>
				<h2>Contact us for Property Valuation</h2>
				<p>
					Connect with us for your property valuation requirement. we are
					available across India for various purpose property valuation like for
					VISA, Bank Loan, Capital Gain Tax etc.
				</p>

				<div className='contactpage-details'>
					<div className='contactpage-links '>
						<h2>Prime File Advisors</h2>
						{contactLinkArr.map((item, index) => (
							<CustomLink
								key={index}
								title={item.title}
								text={item.text}
								url={item.url}
								icon={item.icon}
								color={item.color}
							/>
						))}
					</div>
					<div className='contactpage-form'>
						<h2>Contact Prime File Advisors</h2>
						<CustomForm ContactForm Horizontal />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
