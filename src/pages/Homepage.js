import React, { useEffect } from 'react';
import BackgroundVideo from '../assets/BackgroundVideo.mp4';
import TaglineImage from '../assets/pngD.png';
import HomeImage from '../assets/pngE.png';
import { Link } from 'react-router-dom';
import { BiCheckCircle } from 'react-icons/bi';
import { MdPriceCheck, MdOutlineSpeed } from 'react-icons/md';
import { Zoom, Fade } from 'react-awesome-reveal';

import { motion } from 'framer-motion';

const Homepage = () => {
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
			<div className='video-container'>
				<video src={BackgroundVideo} autoPlay muted loop className='' />
			</div>
			<div className='landing-container'>
				<div className='content'>
					<h1 className=''>
						<span>Prime File Advisors</span>
					</h1>
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
						<Fade direction='right'>
							<img src={TaglineImage} alt='' />
						</Fade>
					</div>
				</div>
			</div>
			<div className='homepage-section'>
				<div className='homepage-section-content'>
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
					<div className='homepage-section-image'>
						<Fade direction='right'>
							<img src={HomeImage} alt='' />
						</Fade>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Homepage;
