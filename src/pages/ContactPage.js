import React, { useEffect } from 'react';
import CustomLink, { contactLinkArr } from '../components/CustomLink';
import CustomForm from '../components/CustomForm';
import PropertyTimeline from '../components/PropertyTimeline';
import HorizontalTimeline from '../components/HorizontalTimeline';
import { motion } from 'framer-motion';

const ContactPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<motion.div
			className='contactpage-container itrpage-container'
			initial={{ width: '0' }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
		>
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
			<div className='timeline-mobile-view'>
				<PropertyTimeline />
			</div>
			<div className='timeline-screen-view'>
				<HorizontalTimeline />
			</div>
		</motion.div>
	);
};

export default ContactPage;
