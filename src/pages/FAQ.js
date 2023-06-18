import React from 'react';
import FAQImage from '../assets/faqImage.svg';

const FAQ = () => {
	return (
		<div className='faq-container'>
			<div className='faq-landing'>
				<div className='faq-text'>
					<h1>Got a question?</h1>
					<h1>Get your answer</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, modi
						eligendi. Sint ab optio enim?
					</p>
				</div>
				<div className='faq-image'>
					<img src={FAQImage} alt='' />
				</div>
			</div>
		</div>
	);
};

export default FAQ;
