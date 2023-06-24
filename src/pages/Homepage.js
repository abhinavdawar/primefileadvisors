import React, { useEffect } from 'react';
import BackgroundVideo from '../assets/BackgroundVideo.mp4';
import TaglineImage from '../assets/servicesImage.png';
import HomeImage from '../assets/pngwing.com.png';
import { Link } from 'react-router-dom';
import { BiCheckCircle } from 'react-icons/bi';
import HomePageCarousel from '../components/HomePageCarousel';

const Homepage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className='homepage-container text-white' id='landing'>
			<video
				src={BackgroundVideo}
				autoPlay
				muted
				loop
				className='position-fixed'
			/>
			<div className='landing-container'>
				<div className='row align-items-center' id='content'>
					<div className='col-lg-6'>
						<h1 className='display-4 font-weight-bold text-center text-lg-left'>
							Prime File Advisors
						</h1>
						<h2
							className='h1 font-weight-bold text-dark text-center text-lg-left'
							style={{ lineHeight: '1.3' }}
						>
							a one-stop solution for immigration agencies.
						</h2>
						<Link to='/about' style={{ textDecoration: 'none' }}>
							<button className='btn btn-lg rounded-pill my-4 d-block mx-auto ml-lg-0'>
								About
							</button>
						</Link>
					</div>
					<div className='right-content col-lg-6 mt-5 mt-lg-0'>
						<h3 className='font-weight-bold text-center text-lg-left'>
							Special Features
						</h3>
						<h4 className='font-weight-light text-center text-lg-left'>
							Check out what we can do for you
						</h4>
						<div className='features-container  rounded  mt-4 d-flex flex-column align-items-center align-items-lg-start featuresContainer'>
							<div className='feature d-flex align-items-center featureContainer'>
								<i>
									<BiCheckCircle />
								</i>
								<h6 className='font-weight-bold mb-0'>
									A highly competitive price per file.
								</h6>
							</div>
							<div className='feature d-flex align-items-center featureContainer'>
								<i>
									<BiCheckCircle />
								</i>

								<h6 className='font-weight-bold mb-0'>
									A reliable and cost-effective partner.
								</h6>
							</div>
							<div className='feature d-flex align-items-center featureContainer'>
								<i>
									<BiCheckCircle />
								</i>

								<h6 className='font-weight-bold mb-0'>
									speed and affordability Guaranteed
								</h6>
							</div>
						</div>
					</div>
				</div>
				{/* <HomePageCarousel style={{ height: '100%' }} /> */}
			</div>
			<div className='tagline-container'>
				{/* <div className='div-wave1'></div> */}
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
				<div className='div-wave2'></div>
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
				<div className='div-wave3'></div>
			</div>
		</div>
	);
};

export default Homepage;
