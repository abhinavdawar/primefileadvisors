import React, { useState } from 'react';
import { Zoom, Bounce } from 'react-awesome-reveal';
import { FiPhoneCall } from 'react-icons/fi';
import { Link } from 'react-router-dom';

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
				<div className='logo_container'>
					<Zoom direction='in' delay='20'>
						<h3>PRIME</h3>
					</Zoom>
					<div className='logo_bottom'>
						<span className='logo_block'></span>
						<Bounce delay='60'>
							<p>File Advisors</p>
						</Bounce>
					</div>
				</div>
				<div className={menu_class}>
					<ul className='links'>
						<Link to='/' style={{ textDecoration: 'none' }}>
							<li className='link'>Home</li>
						</Link>
						<Link to='/about' style={{ textDecoration: 'none' }}>
							<li className='link'>About</li>
						</Link>
						<Link to='/services' style={{ textDecoration: 'none' }}>
							<li className='link'>Our Services</li>
						</Link>
						<Link to='/faq' style={{ textDecoration: 'none' }}>
							<li className='link'>FAQ</li>
						</Link>
						<Link to='/contact' style={{ textDecoration: 'none' }}>
							<li className='link'>Contact Us</li>
						</Link>
					</ul>
				</div>

				<div className='phone-call'>
					<i className='call_icon' title='Call now'>
						<FiPhoneCall />
					</i>
					<span className='call_text'>Call Now</span>
				</div>
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
