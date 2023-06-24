import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const CertificateForm = ({ service_id, template_id, user_id }) => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm({ service_id }, { template_id }, form.current, { user_id })
			.then(
				(result) => {
					console.log(result.text);
					console.log('message sent');
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<form id='form' ref={form} onSubmit={sendEmail}>
			<div className='input-container'>
				<label>Your Name</label>
				<input type='text' name='user_name' placeholder='enter name here' />
			</div>
			<div className='input-container email-input'>
				<label>Your Email</label>
				<input type='email' name='user_email' placeholder='enter email here' />
			</div>
			<div className='input-container textarea-input'>
				<label>Message</label>
				<textarea
					name='user_message'
					id=''
					cols='49'
					rows='7'
					fixed='true'
					placeholder='Write your message here'
				></textarea>
			</div>
			<input
				type='submit'
				name='submit_input'
				className='submit-button'
				value='Send Message'
			/>
		</form>
	);
};

export default CertificateForm;
