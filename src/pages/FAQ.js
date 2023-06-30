import React, { useEffect } from 'react';
import FAQImage from '../assets/faqImage.svg';
import Accordion from '../components/Accordion';
import FAQData from '../components/FAQData';
import { motion } from 'framer-motion';
import { Zoom, Fade } from 'react-awesome-reveal';

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
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
							modi eligendi. Sint ab optio enim?
						</p>
					</Zoom>
				</div>
				<div className='faq-image'>
					<Fade direction='down'>
						<img src={FAQImage} alt='' />
					</Fade>
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
