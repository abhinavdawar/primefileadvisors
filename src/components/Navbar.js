import React, { useState } from 'react';
import { Zoom, Bounce } from 'react-awesome-reveal';
import { FiPhoneCall } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const linksArray = [
	{ name: 'Home', to: '' },
	{ name: 'About', to: 'about' },
	{ name: 'Our Services', to: 'services' },
	{ name: 'FAQ', to: 'faq' },
	{ name: 'Contact Us', to: 'contact' },
];

const Navbar = () => {
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
					<Zoom direction='in' delay='20'>
						<h3>PRIME</h3>
					</Zoom>
					<div className='logo_bottom'>
						<span className='logo_block'></span>
						<Bounce delay='60'>
							<p>File Advisors</p>
						</Bounce>
					</div>
				</Link>
				<div className={menu_class}>
					<ul className='links'>
						{linksArray.map((link) => (
							<Link
								to={`/${link.to}`}
								style={{ textDecoration: 'none' }}
								onClick={updateMenu}
								key={link.name}
							>
								<li className='link'>{link.name}</li>
							</Link>
						))}
					</ul>
				</div>

				<a
					href='tel:+919560252346'
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
