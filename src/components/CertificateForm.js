import React from 'react';
import { Fade } from 'react-awesome-reveal';

const CertificateForm = () => {
	const handleFile = (e) => {
		console.log(e.target.files);
	};
	return (
		<form
			action='https://formsubmit.co/primefileadvisors@gmail.com'
			method='POST'
			encType='multipart/form-data'
		>
			<div className='input-container'>
				<Fade direction='right'>
					<label>Your Name</label>
				</Fade>

				<input type='text' name='Name' placeholder='enter name here' />
			</div>
			<div className='input-container email-input'>
				<Fade direction='right'>
					<label>Your Email</label>
				</Fade>
				<input type='email' name='Email' placeholder='enter email here' />
			</div>
			<div className='input-container'>
				<Fade direction='right'>
					<label>Your Phone No.</label>
				</Fade>
				<input type='text' name='Phone' placeholder='enter phone no. here' />
			</div>
			<div className='input-container textarea-input'>
				<Fade direction='right'>
					<label>Message</label>
				</Fade>
				<textarea
					name='Message'
					id=''
					cols='49'
					rows='7'
					fixed='true'
					placeholder='Write your message here'
				></textarea>
			</div>
			<div className='input-container textarea-input'>
				<Fade direction='right'>
					<label>Attach File</label>
				</Fade>
				<input
					type='file'
					name='attachment'
					accept='image/png, image/jpeg, application/pdf, application/doc, application/docx'
					onChange={handleFile}
					multiple
				/>
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
