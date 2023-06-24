import React, { useEffect } from 'react';
import { IoMdCall } from 'react-icons/io';
import { GrMail } from 'react-icons/gr';
import { TiLocation } from 'react-icons/ti';
import CertificateForm from '../components/CertificateForm';
const service_id = 'service_bw9y36m';
const template_id = 'template_f6ufosr';
const user_id = 'SYmjrAocqWVoD6DDF';

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className='contact-container'>
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
						+91 9999999999
					</span>
					<span className='email-info'>
						<GrMail />
						abc@gmail.com
					</span>
					<span className='location-info'>
						<TiLocation />
						Gurugram, India
					</span>
				</div>
				<div className='contact-form'>
					<CertificateForm
						service_id={service_id}
						template_id={template_id}
						user_id={user_id}
					/>
				</div>
			</div>
		</div>
	);
};

export default Contact;
