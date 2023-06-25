import React, { useEffect } from 'react';
import AboutImage from '../assets/aboutImage.png';
import Typewriter from 'typewriter-effect';
import Wave from 'react-wavify';
import AboutUs from '../assets/AboutUs.svg';
import ReviewSlider from '../components/ReviewSlider';
import { motion } from 'framer-motion';
import { Zoom, Fade } from 'react-awesome-reveal';

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<motion.div className='about-container'>
			<div className='about-landing'>
				<div className='about-text'>
					<Zoom>
						<h1>Hi! We are</h1>
					</Zoom>
					<Zoom>
						<p>Prime File Advisors</p>
					</Zoom>
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
					<Fade direction='right'>
						<img src={AboutImage} alt='' />
					</Fade>
				</div>
			</div>
			<Wave
				fill='#ffffff'
				paused={false}
				options={{
					height: 80,
					amplitude: 40,
					speed: 0.2,
					points: 4,
				}}
			/>
			<div className='about-info'>
				<div className='info-image'>
					<Fade direction='left'>
						<img src={AboutUs} alt='' />
					</Fade>
				</div>
				<div className='info-text'>
					<Zoom>
						<h1>Who we are</h1>
					</Zoom>
					<Zoom>
						<p>
							We are a group of experienced charted accountants having
							experience of more than 4 years. We are bringing our experties in
							this industry to streamline and revolutionarise all the steps
							involved under one roof
						</p>
					</Zoom>
				</div>
			</div>
			<section
				id='info'
				className='py-5 text-white text-center'
				style={{ color: '#000000 !important' }}
			>
				<div className='container'>
					<h2 className='h1 mt-0'>We Love to Work</h2>
					<Zoom>
						<p className='lead text-uppercase'>
							Let us support you in every step.
						</p>
					</Zoom>
					<hr className='divider-sm my-3' />
					<div className='row text-success'>
						<div className='col-md-4'>
							<div className='icon rounded mt-3 py-5 bg-white'>
								<i className='fas fa-code fa-3x mb-4'></i>
								<h3 className='h4 mb-2'>Comprehensive Business Support</h3>
							</div>
						</div>
						<div className='col-md-4'>
							<div className='icon rounded mt-3 py-5 bg-white'>
								<i className='fas fa-mobile-alt fa-3x mb-4'></i>
								<h3 className='h4 mb-2'>
									Streamlining Acquisition of all necessary financial documents{' '}
								</h3>
							</div>
						</div>
						<div className='col-md-4'>
							<div className='icon rounded mt-3 py-5 bg-white'>
								<i className='fas fa-headset fa-3x mb-4'></i>
								<h3 className='h4 mb-2'>
									One stop solution for immigration agencies
								</h3>
							</div>
						</div>
					</div>
					<div className='row my-5'>
						<div className='col-lg-3 col-6'>
							<Zoom>
								<h6 className='h1 font-weight-bold'>105</h6>
							</Zoom>
							<p>Clients</p>
						</div>
						<div className='col-lg-3 col-6'>
							<Zoom>
								<h6 className='h1 font-weight-bold'>120</h6>
							</Zoom>
							<p>Projects</p>
						</div>
						<div className='col-lg-3 col-6'>
							<Zoom>
								<h6 className='h1 font-weight-bold'>5000</h6>
							</Zoom>
							<p>Hours of Service</p>
						</div>
						<div className='col-lg-3 col-6'>
							<Zoom>
								<h6 className='h1 font-weight-bold'>20</h6>
							</Zoom>
							<p>Hard Workers</p>
						</div>
					</div>
				</div>
			</section>
			<section id='testimonials'>
				<div id='testimonials-bg'></div>
				<article>
					<header>
						<h2>Our Satisfied Users</h2>
						<h5>
							Rated <span>9.6/10</span>
							<br /> By our verified users
						</h5>
					</header>

					<ReviewSlider />
				</article>
			</section>
		</motion.div>
	);
};

export default About;
