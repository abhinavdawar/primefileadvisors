import React from 'react';

const ContactButton = ({ name, icon, url }) => {
	const handleClick = () => {
		window.open(`${url}`);
	};
	return (
		<button className='contact-button' onClick={handleClick}>
			<span className='contact-button-decor'></span>
			<div className='contact-button-content'>
				<div className='contact-button-icon'>{icon}</div>
				<span className='contact-button-text'>{name}</span>
			</div>
		</button>
	);
};

export default ContactButton;
