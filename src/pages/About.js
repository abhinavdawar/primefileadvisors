import React, { useEffect } from 'react';
import TaglineImage from '../assets/teamImage1.jpg';
import HomeImage from '../assets/handshake.jpg';
import FeatureCard from '../components/FeatureCard';
import CustomButton from '../components/CustomButton';
import { BiCheckCircle } from 'react-icons/bi';
import { MdPriceCheck, MdOutlineSpeed } from 'react-icons/md';
import { Fade } from 'react-awesome-reveal';

import { motion } from 'framer-motion';

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<motion.div
			className='about-container text-white'
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
						<FeatureCard
							feature='A highly competitive price per file.'
							cardIcon={<MdPriceCheck />}
						/>
						<FeatureCard
							feature='A reliable and cost-effective partner.'
							cardIcon={<BiCheckCircle />}
						/>
						<FeatureCard
							feature='speed and affordability Guaranteed.'
							cardIcon={<MdOutlineSpeed />}
						/>
					</div>
					<div className='btn-conatiner'>
						<CustomButton
							route='/income-tax-return'
							buttonName='Income Tax Return'
						/>
						<CustomButton
							route='/net-worth-certificate'
							buttonName='Net Worth Certificate'
						/>
						<CustomButton
							route='/property-valuation-certificate'
							buttonName='Property Valuation Certificate'
						/>
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
			<div className='about-section'>
				<div className='about-section-content'>
					<div className='about-section-image'>
						<img src={HomeImage} alt='' />
					</div>
					<div className='about-section-text'>
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
