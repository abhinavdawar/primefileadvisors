import React from 'react';
import { Link } from 'react-router-dom';
import {
	FaFacebookF,
	FaInstagram,
	FaTwitter,
	FaLinkedin,
	FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
	return (
		<div className='footer-container'>
			<p className='heading'>Connect with us</p>
			<hr />
			<div className='social-icons'>
				<div className='social-link'>
					<Link>
						<FaFacebookF className='social-icon' />
					</Link>
				</div>
				<div className='social-link'>
					<Link>
						<FaInstagram className='social-icon' />
					</Link>
				</div>
				<div className='social-link'>
					<Link>
						<FaTwitter className='social-icon' />
					</Link>
				</div>
				<div className='social-link'>
					<Link>
						<FaLinkedin className='social-icon' />
					</Link>
				</div>
				<div className='social-link'>
					<Link>
						<FaYoutube className='social-icon' />
					</Link>
				</div>
			</div>
			<div className='footer-content'>
				<div className='left-content'>
					<div className='quick-links'>
						<div className='title2'>Quick links</div>
						<span></span>
						<p>Get RH+ card</p>
						<p>Become volunteer</p>
						<p>Get your guide</p>
					</div>
					<div className='know-us'>
						<div className='title2'>Know us</div>
						<span className='line'></span>
						<p>About us</p>
						<p>Contact us</p>
						<p>Read about us</p>
					</div>
				</div>
				<div className='get-notification'>
					<input type='text' placeholder='Enter your email address' />
					<button>Get latest notification</button>
				</div>
			</div>
			<div className='other-content'>
				<div className='team-line'>
					<p>
						Made with <span>&#10084;</span> by our team
					</p>
				</div>
				<div className='terms'>
					<p>Terms of uses</p>
					<p>Privacy and policy</p>
				</div>
			</div>
			<div className='footer-line'>
				<p>
					<span>© </span> 2023 Prime File Advisors All rights reserved
				</p>
			</div>
		</div>
	);
};

export default Footer;
