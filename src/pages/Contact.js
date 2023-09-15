import React, { useEffect } from 'react';
import BubbleBackground from '../components/BubbleBackground';
import ContactInfoCard from '../components/ContactInfoCard';
import CertificateForm from '../components/CertificateForm';
import { motion } from 'framer-motion';

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<motion.div
			className='contact-container'
			initial={{ width: '0' }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
		>
			<BubbleBackground />
			<div className='contact-header'>
				<h1>Get In Touch</h1>
				<p>We are happy to assist you with our experties and services.</p>
			</div>
			<div className='form-container'>
				<ContactInfoCard />
				<div className='contact-form'>
					<CertificateForm />
				</div>
			</div>
		</motion.div>
	);
};

export default Contact;
