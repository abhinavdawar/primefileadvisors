import React, { useEffect } from 'react';
import TaglineImage from '../assets/teamImage1.jpg';
import HomeImage from '../assets/handshake.jpg';
import { Link } from 'react-router-dom';
import { BiCheckCircle } from 'react-icons/bi';
import { MdPriceCheck, MdOutlineSpeed } from 'react-icons/md';
import { Zoom, Fade } from 'react-awesome-reveal';

import { motion } from 'framer-motion';

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<motion.div
			className='homepage-container text-white'
			id='landing'
			initial={{ width: '0' }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
		>
			<div className='landing-container'>
				<div className='content'>
					<h1 className=''>Prime File Advisors</h1>
					<h2 className=''>A one-stop solution for immigration agencies.</h2>
					<h6>Check out what we can do for you</h6>
					<div className='features-container'>
						<Zoom>
							<div className='feature'>
								<i style={{ fontSize: '25px' }}>
									<MdPriceCheck />
								</i>
								<p className=''>A highly competitive price per file.</p>
							</div>
						</Zoom>

						<Zoom>
							<div className='feature'>
								<i style={{ fontSize: '25px' }}>
									<BiCheckCircle />
								</i>
								<p className=''>A reliable and cost-effective partner.</p>
							</div>
						</Zoom>
						<Zoom>
							<div className='feature'>
								<i style={{ fontSize: '25px' }}>
									<MdOutlineSpeed />
								</i>
								<p className=''>speed and affordability Guaranteed</p>
							</div>
						</Zoom>
					</div>
					<div className='btn-conatiner'>
						<Fade direction='up'>
							<Link to='/income-tax-return' style={{ textDecoration: 'none' }}>
								<button className=''>Income Tax Return</button>
							</Link>
						</Fade>
						<Fade direction='up'>
							<Link
								to='/net-worth-certificate'
								style={{ textDecoration: 'none' }}
							>
								<button className=''>Net Worth Certificate</button>
							</Link>
						</Fade>
						<Fade direction='up'>
							<Link
								to='/property-valuation-certificate'
								style={{ textDecoration: 'none' }}
							>
								<button className=''>Property Valuation Certificate</button>
							</Link>
						</Fade>
					</div>
				</div>
			</div>
			<div className='tagline-container'>
				<div className='tagline-content'>
					<div className='tagline-text'>
						<Fade direction='left'>
							<h1>Your Goal Our Ambition</h1>
						</Fade>
						<div className='under-line1'></div>
						<Fade direction='left' delay='0.2s'>
							<p>
								PrimeFile Advisors offers comprehensive business support
								services, streamlining the acquisition of all necessary
								financial documents within a remarkably short timeframe of 12
								hours. We have established partnerships with experienced CAs and
								architects, enabling us to provide a one-stop solution for
								immigration agencies. By consolidating these services under one
								umbrella, we ensure prompt delivery and eliminate the need for
								agencies to engage multiple professionals.
							</p>
						</Fade>
					</div>

					<div className='tagline-image'>
						<img src={TaglineImage} alt='' />
					</div>
				</div>
			</div>
			<div className='homepage-section'>
				<div className='homepage-section-content'>
					<div className='homepage-section-image'>
						<img src={HomeImage} alt='' />
					</div>
					<div className='homepage-section-text'>
						<Fade direction='left'>
							<p>
								We aim to revolutionize the business support services provided
								to immigration agencies. Our company is uniquely positioned to
								address the challenges faced by immigration agencies in
								acquiring financial documents for visa applications promptly and
								efficiently.
							</p>
						</Fade>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default About;
