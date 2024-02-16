import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import { GrMail } from 'react-icons/gr';
import { BsFillTelephoneFill } from 'react-icons/bs';
export const customerSupportArr = [
	{
		title: 'Call us',
		text: '+91 9876660279',
		icon: <BsFillTelephoneFill />,
		url: 'tel:+919876660279',
		color: 'blue',
	},
	{
		title: 'Whatsapp',
		text: '+91 9876660279',
		icon: <RiWhatsappFill />,
		url: 'https://wa.me/919876660279',
		color: '#25d366',
	},
	{
		title: 'Mail',
		text: 'primefileadvisors@gmail.com',
		icon: <GrMail />,
		url: 'mailto:primefileadvisors@gmail.com?subject=Subject&body=Body%20goes%20here',
		color: 'red',
	},
	{
		title: 'Locate us',
		text: 'Chandigarh, India',
		icon: <FaMapMarkerAlt />,
		url: 'https://maps.app.goo.gl/Kh9nxbjTmS4aMcE66',
		color: 'black',
	},
];

export const contactLinkArr = [
	{
		title: 'Call us',
		text: '+91 9876660279',
		icon: <BsFillTelephoneFill />,
		url: 'tel:+919876660279',
		color: 'blue',
	},
	{
		title: 'Whatsapp',
		text: '+91 9876660279',
		icon: <RiWhatsappFill />,
		url: 'https://wa.me/919876660279',
		color: '#25d366',
	},
	{
		title: 'Mail',
		text: 'primefileadvisors@gmail.com',
		icon: <GrMail />,
		url: 'mailto:primefileadvisors@gmail.com?subject=Subject&body=Body%20goes%20here',
		color: 'red',
	},
];

const CustomLink = ({ url, color, icon, title, text }) => {
	const handleClick = () => {
		window.open(`${url}`);
	};
	return (
		<button
			onClick={handleClick}
			className='footer-link'
			style={{ '--color': `${color}` }}
		>
			<div className='footer-link-icon' style={{ '--color': `${color}` }}>
				<i>{icon}</i>
			</div>
			<div className='footer-link-text'>
				<h5>{title}</h5>
				<p>{text}</p>
			</div>
		</button>
	);
};

export default CustomLink;
