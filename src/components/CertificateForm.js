import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';

const CertificateForm = () => {
	return (
		<form
			action='https://formsubmit.co/primefileadvisors@gmail.com'
			method='POST'
		>
			<div className='input-container'>
				<label>Your Name</label>
				<input type='text' name='Name' placeholder='enter name here' />
			</div>
			<div className='input-container email-input'>
				<label>Your Email</label>
				<input type='email' name='Email' placeholder='enter email here' />
			</div>
			<div className='input-container'>
				<label>Your Phone No.</label>
				<input type='text' name='Phone' placeholder='enter phone no. here' />
			</div>
			<div className='input-container textarea-input'>
				<label>Message</label>
				<textarea
					name='Message'
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
