import React from 'react';

const ContactButton = ({ Name, Icon }) => {
	return (
		<button className='contact-button'>
			<span className='contact-button-decor'></span>
			<div className='contact-button-content'>
				<div className='contact-button-icon'>{Icon}</div>
				<span className='contact-button-text'>{Name}</span>
			</div>
		</button>
	);
};

export default ContactButton;
