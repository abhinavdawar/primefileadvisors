import React, { useEffect } from 'react';
import BackgroundVideo from '../assets/BackgroundVideo.mp4';
import TaglineImage from '../assets/pngD.png';
import HomeImage from '../assets/pngE.png';
import { Link } from 'react-router-dom';
import { BiCheckCircle } from 'react-icons/bi';
import { MdPriceCheck, MdOutlineSpeed } from 'react-icons/md';

import { motion } from 'framer-motion';

const Homepage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<motion.div
			className='homepage-container text-white'
			id='landing'
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
		>
			<video
				src={BackgroundVideo}
				autoPlay
				muted
				loop
				className='position-fixed'
			/>
			<div className='landing-container'>
				<div className='content'>
					<h1 className=''>Prime File Advisors</h1>
					<h2 className=''>A one-stop solution for immigration agencies.</h2>
					<h6>Check out what we can do for you</h6>
					<div className='features-container'>
						<motion.div className='feature' whileHover={{ scale: 0.8 }}>
							<i style={{ fontSize: '25px' }}>
								<MdPriceCheck />
							</i>
							<p className=''>A highly competitive price per file.</p>
						</motion.div>
						<motion.div className='feature' whileHover={{ scale: 0.8 }}>
							<i style={{ fontSize: '25px' }}>
								<BiCheckCircle />
							</i>
							<p className=''>A reliable and cost-effective partner.</p>
						</motion.div>
						<motion.div className='feature' whileHover={{ scale: 0.8 }}>
							<i style={{ fontSize: '25px' }}>
								<MdOutlineSpeed />
							</i>
							<p className=''>speed and affordability Guaranteed</p>
						</motion.div>
					</div>
					<div className='btn-conatiner'>
						<Link
							to='/net-worth-certificate'
							style={{ textDecoration: 'none' }}
						>
							<button className=''>Net Worth Certificate</button>
						</Link>
						<Link
							to='/property-valuation-certificate'
							style={{ textDecoration: 'none' }}
						>
							<button className=''>Property Valuation Certificate</button>
						</Link>
					</div>
				</div>
			</div>
			<div className='tagline-container'>
				<div className='tagline-content'>
					<div className='tagline-text'>
						<h1>Your Goal Our Ambition</h1>
						<p>
							PrimeFile Advisors offers comprehensive business support services,
							streamlining the acquisition of all necessary financial documents
							within a remarkably short timeframe of 12 hours. We have
							established partnerships with experienced CAs and architects,
							enabling us to provide a one-stop solution for immigration
							agencies. By consolidating these services under one umbrella, we
							ensure prompt delivery and eliminate the need for agencies to
							engage multiple professionals.
						</p>
					</div>

					<div className='tagline-image'>
						<img src={TaglineImage} alt='' />
					</div>
				</div>
			</div>
			<div className='homepage-section'>
				<div className='homepage-section-content'>
					<div className='homepage-section-text'>
						<p>
							We aim to revolutionize the business support services provided to
							immigration agencies. Our company is uniquely positioned to
							address the challenges faced by immigration agencies in acquiring
							financial documents for visa applications promptly and
							efficiently.
						</p>
					</div>
					<div className='homepage-section-image'>
						<img src={HomeImage} alt='' />
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Homepage;
