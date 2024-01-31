import React from 'react';
import { Link } from 'react-router-dom';
import { FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
	return (
		<Footer className='footer-container'>
			<div className='footer-top'>
				<div className='footer-top-head'>
					<h1>PRIME FILE ADVISORS</h1>
					<p>
						ITR {'>'} Property Valuation {'>'} CA Valuation
					</p>
				</div>
				<div className='footer-top-links'>
					<h4>Let's chat!</h4>
					<div className='footer-top-link'>
						<Link>
							<FaYoutube />
						</Link>
						<Link>
							<FaInstagram />
						</Link>
					</div>
				</div>
			</div>
			<div className='footer-content-container'>
				<div className='footer-content-head'>
					<img src='' alt='' />
					<h4>PRIME FILE ADVISORS</h4>
				</div>
				<div className='footer-content'>
					<div className='footer-details'></div>
					<div className='footer-form'></div>
					<div className='footer-services'></div>
				</div>
			</div>
			<div className='footer-bottom'>
				<p>© Copyrights 2024 - All Rights Reserved by Prime File Advisors™</p>
			</div>
		</Footer>
	);
};

export default Footer;
