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

			<div className='footer-line'>
				<p>
					<span>© </span> 2023 Prime File Advisors All rights reserved
				</p>
			</div>
		</div>
	);
};

export default Footer;
