import React from 'react';
import AboutImage from '../assets/aboutImage.png';
import Typewriter from 'typewriter-effect';

const About = () => {
	return (
		<div className='about-container'>
			<div className='about-landing'>
				<div className='about-text'>
					<h1>Hi! We are</h1>
					<p>Prime File Advisors</p>
					<span>
						<Typewriter
							onInit={(typewriter) => {
								typewriter
									.typeString(
										'Streamlining Acquisition of all necessary financial documents'
									)
									.pauseFor(100)
									.deleteAll()
									.typeString('One stop solution for immigration agencies')
									.pauseFor(100)
									.deleteAll()
									.typeString('Comprehensive Business Support')
									.start();
							}}
						/>
					</span>
				</div>
				<div className='intro-image'>
					<img src={AboutImage} alt='' />
				</div>
			</div>
		</div>
	);
};

export default About;
