import React, { useEffect } from 'react';
import AboutImage from '../assets/aboutImage.png';
import Typewriter from 'typewriter-effect';
import Wave from 'react-wavify';
import AboutUs from '../assets/teamImage.jpg';
import ReviewSlider from '../components/ReviewSlider';
import Pricing from '../components/Pricing';
import { motion } from 'framer-motion';
import { Zoom, Fade } from 'react-awesome-reveal';
import { FaHandshake } from 'react-icons/fa';
import { BsFileEarmarkCheckFill, BsSendCheckFill } from 'react-icons/bs';

const Homepage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<motion.div className='about-container'>
			<div className='about-landing'>
				<div className='triangle_rose'></div>
				<div className='triangle_vert'></div>
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
										'Streamlining Acquisition of all necessary financial documents.<br/>'
									)
									.pauseFor(100)
									.typeString(
										'One stop solution for immigration agencies.<br/>'
									)
									.pauseFor(100)
									.typeString('Comprehensive Business Support.')
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
			{/* <Wave
				fill='#ffffff'
				paused={false}
				options={{
					height: 80,
					amplitude: 40,
					speed: 0.2,
					points: 4,
				}}
			/> */}
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
					<div className='under-line'></div>

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
				className='py-5 text-white text-center work-cont'
				style={{
					color: '#000000 !important',
				}}
			>
				<div className='container'>
					<h2 className='h1 mt-0' style={{ position: 'relative', zIndex: '1' }}>
						We Love to Work
					</h2>
					<Zoom>
						<p
							className='lead text-uppercase'
							style={{ position: 'relative', zIndex: '1' }}
						>
							Let us support you in every step.
						</p>
					</Zoom>
					<hr className='divider-sm my-3' />
					<div className='work-container'>
						<div className='work'>
							<i className=''>
								<FaHandshake />
							</i>
							<p className=''>Comprehensive Business Support</p>
						</div>
						<div className='work'>
							<i className=''>
								<BsFileEarmarkCheckFill />
							</i>
							<p className=''>
								Streamlining Acquisition of all necessary financial documents
							</p>
						</div>
						<div className='work'>
							<i className=''>
								<BsSendCheckFill />
							</i>
							<p className=''>One stop solution for immigration agencies</p>
						</div>
					</div>
					<div className='stats-container'>
						<div
							className='stats-group'
							style={{ position: 'relative', zIndex: '1' }}
						>
							<div className=' stats'>
								<Zoom>
									<h6 className=''>105</h6>
								</Zoom>
								<p>Clients</p>
							</div>
							<div className='stats'>
								<Zoom>
									<h6 className=''>120</h6>
								</Zoom>
								<p>Projects</p>
							</div>
						</div>
						<div
							className='stats-group'
							style={{ position: 'relative', zIndex: '1' }}
						>
							<div className='stats'>
								<Zoom>
									<h6 className=''>5000</h6>
								</Zoom>
								<p>Hours of Service</p>
							</div>
							<div className='stats'>
								<Zoom>
									<h6 className=''>20</h6>
								</Zoom>
								<p>Hard Workers</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Pricing />
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

export default Homepage;
