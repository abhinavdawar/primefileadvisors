import React, { useEffect } from 'react';
import FAQImage from '../assets/faqImage.svg';
import Accordion from '../components/Accordion';
import FAQData from '../components/FAQData';
import { motion } from 'framer-motion';
import { Zoom } from 'react-awesome-reveal';

const FAQ = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<motion.div
			className='faq-container'
			initial={{ width: '0' }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
		>
			<div className='faq-landing'>
				<div className='faq-text'>
					<h1>Got a question?</h1>
					<h1>Get your answer</h1>
					<Zoom>
						<p>
							We are here to answer all your Queries related to immigration. We
							are one stop solution for all your needs. The most common asked
							Questions are listed below. But if you still need more information
							then send us your Query on Contact Us page.
						</p>
						<p>We will be Happy to serve you better</p>
					</Zoom>
				</div>
				<div className='faq-image'>
					<img src={FAQImage} alt='' />
				</div>
			</div>
			<div className='' id='faq'>
				<div className='accordion'>
					<h1>F.A.Q.</h1>
					<Accordion items={FAQData} />
				</div>
			</div>
		</motion.div>
	);
};

export default FAQ;
