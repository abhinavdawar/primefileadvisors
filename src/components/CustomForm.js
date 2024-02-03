import React from 'react';

const CustomForm = ({ Horizontal }) => {
	return (
		<form
			className={`custom-form ${Horizontal && 'horizontal-form'} `}
			action='https://formsubmit.co/primefileadvisors@gmail.com'
			method='POST'
			encType='multipart/form-data'
			autoComplete='off'
		>
			<div className='custom-form-input-container'>
				<label htmlFor='Name'>Name</label>
				<input
					className='custom-form-input'
					type='text'
					name='Name'
					id='Name'
					placeholder='Your Name'
					required
				/>
			</div>
			<div className='custom-form-input-container'>
				<label htmlFor='Email'>Email</label>
				<input
					className='custom-form-input'
					type='email'
					name='Email'
					id='Email'
					placeholder='Your Email'
					required
				/>
			</div>
			<div className='custom-form-input-container'>
				<label htmlFor='MobileNo'>Mobile No.</label>
				<input
					className='custom-form-input'
					type='text'
					name='MobileNo'
					id='MobileNo'
					placeholder='Your Mobile No'
				/>
			</div>
			<input className='custom-form-submit' type='submit' value='Submit' />
		</form>
	);
};

export default CustomForm;
