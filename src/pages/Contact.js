import React from 'react';

import { IoMdCall } from 'react-icons/io';
import { GrMail } from 'react-icons/gr';
import { TiLocation } from 'react-icons/ti';

const Contact = () => {
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
				<form id='form'>
					<div className='contact-details'>
						<div className='input-container'>
							<label>Your Name</label>
							<input type='text' name='name' placeholder='enter name here' />
						</div>
						<div className='input-container email-input'>
							<label>Your Email</label>
							<input type='email' name='email' placeholder='enter email here' />
						</div>
					</div>
					<div className='input-container subject-input'>
						<label>Your Subject</label>
						<input
							type='text'
							name='subject'
							placeholder='enter subject here'
						/>
					</div>
					<div className='input-container textarea-input'>
						<label>Message</label>
						<textarea
							name='textarea'
							id=''
							cols='49'
							rows='10'
							fixed='true'
							placeholder='Write your message here'
						></textarea>
					</div>
					<button className='submit-button'>Send Message</button>
				</form>
			</div>
			<div className='back-color'></div>
		</div>
	);
};

export default Contact;
