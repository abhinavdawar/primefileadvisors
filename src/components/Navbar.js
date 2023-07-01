import React, { useState } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Logo from '../assets/logoTrans.png';
import { useLocation } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

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
		<div>
			<nav>
				<Link
					to='/'
					className='logo_container'
					style={{ textDecoration: 'none' }}
				>
					<Fade direction='left'>
						<img className='logo-image' src={Logo} alt='' />
					</Fade>
				</Link>
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

				<a
					href='tel:+919876660275'
					className='phone-call'
					style={{ textDecoration: 'none' }}
				>
					<i className='call_icon' title='Call now'>
						<FiPhoneCall />
					</i>

					<span className='call_text'>Call Now</span>
				</a>
			</nav>
			<div className='burger-menu' onClick={updateMenu}>
				<div className={burger_class}></div>
				<div className={burger_class}></div>
				<div className={burger_class}></div>
			</div>
		</div>
	);
};

export default Navbar;
