import React from 'react';
import { Link } from 'react-router-dom';
import {
	FaInstagram,
	FaYoutube,
} from 'react-icons/fa';
import { Zoom } from 'react-awesome-reveal';

const Footer = () => {
	return (
		<div className='footer-container'>
			<p className='heading'>Connect with us</p>
			<div className='social-icons'>
				<Zoom>
					<div className='social-link'>
						<Link to='https://instagram.com/_primefile_advisors_pvt_ltd_?igshid=MzRlODBiNWFlZA=='>
							<FaInstagram className='social-icon' />
						</Link>
					</div>
				</Zoom>
				<Zoom>
					<div className='social-link'>
						<Link to='https://www.youtube.com/channel/UCYHZREHV2EEbZZ50Sbnm3KA'>
							<FaYoutube className='social-icon' />
						</Link>
					</div>
				</Zoom>
			</div>
			<div className='footer-line'>
				<p>
					<span>© </span>Prime File Advisors. All rights reserved !!
				</p>
			</div>
		</div>
	);
};

export default Footer;
