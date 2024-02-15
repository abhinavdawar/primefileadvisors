import React from 'react';
import Logo from '../assets/logoTrans.png';
import { FaStar } from 'react-icons/fa';
import GoogleReviewCard from './GoogleReviewCard';
const ReviewArr = [
	{
		name: 'Jatin',
		time: 'PrimeFile Advisors exceeded my expectations with their impeccable service in handling my immigration documents. They guided me through the entire process with professionalism and efficiency.',
		color1: '#d65d6a',
		color2: '#f0939c',
		rating: 5.0,
	},
	{
		name: 'Aashish',
		time: 'I highly recommend their services to anyone in need of assistance with immigration paperwork. I am incredibly grateful for the exceptional service provided by PrimeFile Advisors.',
		color1: '#39a7b0',
		color2: '#a4e2e9',
		rating: 4.65,
	},
	{
		name: 'Bhupendra Singh',
		time: 'Choosing PrimeFile Advisors for assistance with my immigration documents was the best decision I could have made. Their knowledgeable team streamlined the entire process, saving me time and stress.',
		color1: '#f1a25e',
		color2: '#fdc596',
		rating: 5.0,
	},
	{
		name: 'Paramjeet Kaur',
		time: 'Their dedication to client satisfaction truly sets them apart. I wholeheartedly endorse PrimeFile Advisors for anyone seeking top-notch service in navigating immigration paperwork.',
		color1: '#19a382',
		color2: '#a2c7b6',
		rating: 4.6,
	},
];

const GoogleReviews = () => {
	return (
		<div className='google-reviews-container'>
			<h2>Customer Reviews</h2>
			<div className='google-reviews'>
				<div className='google-reviews-top'>
					<div className='google-reviews-top-left'>
						<div className='google-reviews-company-name'>
							<img src={Logo} alt='' />
							<h2>Prime File Advisors</h2>
						</div>
						<p>House|Flat|Building|City</p>
					</div>
					<div className='google-reviews-company-rating'>
						<h3>4.8</h3>
						<div
							className='stars company-stars'
							style={{ '--rating': 4.65, '--color1': '#fff' }}
						></div>
						<span>200 reviews</span>
					</div>
				</div>
				<div className='google-reviews-details'>
					{ReviewArr.map((item, index) => (
						<GoogleReviewCard
							key={index}
							name={item.name}
							time={item.time}
							color1={item.color1}
							color2={item.color2}
							rating={item.rating}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default GoogleReviews;
