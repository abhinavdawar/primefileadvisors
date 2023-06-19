import React, { useEffect } from 'react';
import FAQImage from '../assets/faqImage.svg';
import Accordion from '../components/Accordion';

const items = [
	{
		title:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro et labore1',
		content:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro et labore voluptates praesentium asperiores quod expedita molestias facilis, amet impedit!',
	},
	{
		title:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro et labore2',
		content:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro et labore voluptates praesentium asperiores quod expedita molestias facilis, amet impedit!',
	},
	{
		title:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro et labore3',
		content:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro et labore voluptates praesentium asperiores quod expedita molestias facilis, amet impedit!',
	},
	{
		title:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro et labore4',
		content:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro et labore voluptates praesentium asperiores quod expedita molestias facilis, amet impedit!',
	},
	{
		title:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro et labore5',
		content:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro et labore voluptates praesentium asperiores quod expedita molestias facilis, amet impedit!',
	},
	{
		title:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro et labore6',
		content:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro et labore voluptates praesentium asperiores quod expedita molestias facilis, amet impedit!',
	},
];
const FAQ = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
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
			<div className='' id='faq'>
				<div className='accordion'>
					<h1>F.A.Q.</h1>
					<Accordion items={items} />
				</div>
			</div>
		</div>
	);
};

export default FAQ;
