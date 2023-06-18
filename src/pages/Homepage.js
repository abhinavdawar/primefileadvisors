import React from 'react';
import BackgroundVideo from '../assets/BackgroundVideo.mp4';
import Image1 from '../assets/2.jpg';
import HomeComponent1 from '../components/HomeComponent1';
import { Link } from 'react-router-dom';

const Homepage = () => {
	return (
		<div className='homepage-container text-white' id='landing'>
			<video
				src={BackgroundVideo}
				autoPlay
				muted
				loop
				className='position-fixed'
			/>
			<div className='container'>
				<div className='row align-items-center' id='content'>
					<div className='col-lg-6'>
						<h1
							className='display-4 font-weight-bold text-center text-lg-left'
							style={{ overflow: 'hidden' }}
						>
							Prime File Advisors
						</h1>
						<h2
							className='h1 font-weight-bold text-dark text-center text-lg-left'
							style={{ overflow: 'hidden' }}
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
						<h3
							className='font-weight-bold text-center text-lg-left'
							style={{ overflow: 'hidden' }}
						>
							Special Features
						</h3>
						<h4
							className='font-weight-light text-center text-lg-left'
							style={{ overflow: 'hidden' }}
						>
							Check out what we can do for you
						</h4>
						<div className='features-container dimmed rounded text-dark mt-4 d-flex flex-column align-items-center align-items-lg-start'>
							<div className='feature d-flex align-items-center'>
								<i className='fas h4 fa-check-circle mx-3 text-success'></i>
								<div className='my-3'>
									<h6
										className='font-weight-bold mb-0'
										style={{ overflow: 'hidden' }}
									>
										A highly competitive price per file.
									</h6>
								</div>
							</div>
							<div className='feature d-flex align-items-center'>
								<i className='fas h4 fa-check-circle mx-3 text-success'></i>
								<div className='my-3'>
									<h6
										className='font-weight-bold mb-0'
										style={{ overflow: 'hidden' }}
									>
										A reliable and cost-effective partner.
									</h6>
								</div>
							</div>
							<div className='feature d-flex align-items-center'>
								<i className='fas h4 fa-check-circle mx-3 text-success'></i>
								<div className='my-3'>
									<h6
										className='font-weight-bold mb-0'
										style={{ overflow: 'hidden' }}
									>
										speed and affordability Guaranteed
									</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='tagline-container'>
				<HomeComponent1 />
			</div>
			<div className=''>
				<img src={Image1} alt='' />
				<p>
					We aim to revolutionize the business support services provided to
					immigration agencies. Our company is uniquely positioned to address
					the challenges faced by immigration agencies in acquiring financial
					documents for visa applications promptly and efficiently.
				</p>
			</div>
		</div>
	);
};

export default Homepage;
