import React from 'react';
import BackgroundVideo from '../assets/BackgroundVideo.mp4';

const Homepage = () => {
	return (
		<div className='homepage-container'>
			<video src={BackgroundVideo} autoPlay muted loop className='' />
			<div className='homepage-content'>
				<div className='left-content'>
					<h1>Prime File Advisors</h1>
					<h2>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Blanditiis, doloribus
					</h2>
					<button>Learn More</button>
				</div>
				<div className='right-content'>
					<h3>Special Features</h3>
					<h4>Check out what we can do for you</h4>
					<div className='features-container'>
						<div className='feature'>
							<h6>Easy and Simple UI</h6>
							<p>we make UI easy and simple to understand by everyone.</p>
						</div>
						<div className='feature'>
							<h6>Easy and Simple UI</h6>
							<p>we make UI easy and simple to understand by everyone.</p>
						</div>
						<div className='feature'>
							<h6>Easy and Simple UI</h6>
							<p>we make UI easy and simple to understand by everyone.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
