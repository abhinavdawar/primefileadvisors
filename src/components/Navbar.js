import React, { useState } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { FaClock, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../assets/logoTrans.png';
import { useLocation } from 'react-router-dom';
import ContactButton from './ContactButton';

const linksArray = [
	{ name: 'Home', to: '/' },
	{ name: 'About', to: '/about' },
	{ name: 'FAQ', to: '/faq' },
	{ name: 'Income Tax Return', to: '/income-tax-return' },
	{ name: 'Net Worth Certificate', to: '/net-worth-certificate' },
	{
		name: 'Property Valuation Certificate',
		to: '/property-valuation-certificate',
	},
	{ name: 'Contact Us', to: '/contact' },
];

const Navbar = () => {
	const { pathname } = useLocation();
	// to change burger classes
	const [burger_class, setBurgerClass] = useState('burger-bar unclicked');
	const [menu_class, setMenuClass] = useState('menu hidden');
	const [isMenuClicked, setIsMenuClicked] = useState(false);

	// toggle burger menu change
	const updateMenu = () => {
		if (!isMenuClicked) {
			setBurgerClass('burger-bar clicked');
			setMenuClass('menu visible');
		} else {
			setBurgerClass('burger-bar unclicked');
			setMenuClass('menu hidden');
		}
		setIsMenuClicked(!isMenuClicked);
	};

	return (
		<div className='navbar-container'>
			<div className='navbar-line'>
				<p>
					<span className='navbar-line-icon'>
						<FaClock />
					</span>{' '}
					Available (24 &#215; 7)
				</p>
			</div>
			<div className='navbar-contact-links'>
				<Link to='/' className='logo-container'>
					<h1>PRIME FILE ADVISORS</h1>
					<div className='logo-image-container'>
						<img className='logo-image' src={Logo} alt='Prime File Advisors' />
					</div>
				</Link>
				<div className='navbar-buttons-container'>
					<ContactButton
						name='+91 9876660279'
						icon={<FiPhoneCall />}
						url='tel:+919876660279'
					/>
					<ContactButton
						name='+91 9876660279'
						icon={<FaWhatsapp />}
						url='https://wa.me/919876660279'
					/>
				</div>
			</div>
			<nav>
				<div className={menu_class}>
					<ul className='links'>
						{linksArray.map((link) => (
							<Link
								className={pathname === `${link.to}` ? 'active link' : 'link'}
								to={link.to}
								style={{ textDecoration: 'none' }}
								onClick={updateMenu}
								key={link.name}
							>
								<li>{link.name}</li>
							</Link>
						))}
					</ul>
				</div>
				<div className='burger-menu' onClick={updateMenu}>
					<div className={burger_class}></div>
					<div className={burger_class}></div>
					<div className={burger_class}></div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
