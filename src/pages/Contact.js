import React, { useEffect } from 'react';
import { IoMdCall } from 'react-icons/io';
import { GrMail } from 'react-icons/gr';
import { TiLocation } from 'react-icons/ti';
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
			<ul class='bg-bubbles'>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<div className='contact-header'>
				<h1>Get In Touch</h1>
				<p>We are happy to assist you with our experties and services.</p>
			</div>
			<div className='form-container'>
				<div className='contact-info'>
					<h2>Contact Information</h2>
					<p>You can directly reach us on below contact information.</p>
					<span className='mobile-info'>
						<IoMdCall />
						+91 8360614667
					</span>
					<span className='email-info'>
						<GrMail />
						primefileadvisors@gmail.com
					</span>
					<span className='location-info'>
						<TiLocation />
						Chandigarh, India
					</span>
				</div>
				<div className='contact-form'>
					<CertificateForm />
				</div>
			</div>
		</motion.div>
	);
};

export default Contact;
