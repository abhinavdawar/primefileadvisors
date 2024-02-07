import React from 'react';
import CustomForm from './CustomForm';
import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { TbSquareRoundedArrowRightFilled } from 'react-icons/tb';
import CustomLink, { customerSupportArr } from './CustomLink';
const Footer = () => {
	const servicesLinkArr = [
		{
			name: 'Property Valuation Certificate',
			url: '/property-valuation',
		},
		{ name: 'CA Valuation Certificate', url: '/ca-valuation' },
		{ name: 'Income Tax Return', url: '/income-tax-return' },
	];
	const otherLinkArr = [
		{ name: 'Contact Us', url: '/contact-us' },
		{ name: 'Sample/Format', url: '/sample-format' },
		{ name: 'Home', url: '/' },
	];
	return (
		<div className='footer-container'>
			<div className='footer-top'>
				<div className='footer-top-head'>
					<h3>PRIME FILE ADVISORS</h3>
					<p>
						ITR {'>'} Property Valuation {'>'} CA Valuation
					</p>
				</div>
				<div className='footer-top-links'>
					<h4>Follow us on Social Media</h4>

					<div className='footer-top-link'>
						<Link
							className='footer-social-link'
							to='https://www.youtube.com/channel/UCYHZREHV2EEbZZ50Sbnm3KA'
						>
							<i>
								<FaYoutube />
							</i>
						</Link>
						<Link
							className='footer-social-link'
							to='https://instagram.com/_primefile_advisors_pvt_ltd_?igshid=MzRlODBiNWFlZA=='
						>
							<i>
								<FaInstagram />
							</i>
						</Link>
					</div>
				</div>
			</div>
			<div className='footer-content'>
				<div className='footer-details-container'>
					<div className='footer-heading'>
						<h6>CUSTOMER SUPPORT (24 &#215; 7)</h6>
					</div>
					<div className='footer-details'>
						{customerSupportArr.map((item, index) => (
							<CustomLink
								key={index}
								title={item.title}
								text={item.text}
								url={item.url}
								icon={item.icon}
								color={item.color}
							/>
						))}
					</div>
				</div>
				<div className='footer-form'>
					<div className='footer-heading'>
						<h6>REQUEST CALL BACK</h6>
					</div>
					<CustomForm />
				</div>
				<div className='footer-services'>
					<div className='footer-heading'>
						<h6>OUR SERVICES</h6>
					</div>
					<div className='footer-services-links'>
						{servicesLinkArr.map((item, index) => (
							<Link key={index} to={item.url} className='footer-service-link'>
								<i>
									<TbSquareRoundedArrowRightFilled />
								</i>
								{item.name}
							</Link>
						))}
					</div>
					<div className='footer-heading important-links'>
						<h6>IMPORTANT LINKS</h6>
					</div>
					<div className='footer-services-links'>
						{otherLinkArr.map((item, index) => (
							<Link key={index} to={item.url} className='footer-service-link'>
								<i>
									<TbSquareRoundedArrowRightFilled />
								</i>
								{item.name}
							</Link>
						))}
					</div>
				</div>
			</div>
			<div className='footer-bottom'>
				<p>© Copyrights 2024 - All Rights Reserved by Prime File Advisors™</p>
			</div>
		</div>
	);
};

export default Footer;
