import React from 'react';
import Logo from '../assets/logoTrans.png';
import { FaStar } from 'react-icons/fa';
import GoogleReviewCard from './GoogleReviewCard';
import face1 from '../assets/face-2.jpg';
const ReviewArr = [
	{
		name: 'Rishabh Tanwar',
		image: face1,
		time: '1 month ago',
		color1: '#d65d6a',
		color2: '#f0939c',
	},
	{
		name: 'Rishabh Tanwar',
		image: face1,
		time: '1 month ago',
		color1: '#39a7b0',
		color2: '#a4e2e9',
	},
	{
		name: 'Rishabh Tanwar',
		image: face1,
		time: '1 month ago',
		color1: '#f1a25e',
		color2: '#fdc596',
	},
	{
		name: 'Rishabh Tanwar',
		image: face1,
		time: '1 month ago',
		color1: '#19a382',
		color2: '#a2c7b6',
	},
];

export const Star = ({ small }) => {
	return (
		<div className={`star-container ${small && 'star-small'}`}>
			<i>
				<FaStar />
			</i>
			<i>
				<FaStar />
			</i>
			<i>
				<FaStar />
			</i>
			<i>
				<FaStar />
			</i>
			<i>
				<FaStar />
			</i>
		</div>
	);
};

const GoogleReviews = () => {
	return (
		<div className='google-reviews-container'>
			<h2>Google Reviews</h2>
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
						<h3>5.0</h3>
						<Star />
						<span>200 reviews</span>
					</div>
				</div>
				<div className='google-reviews-details'>
					{ReviewArr.map((item, index) => (
						<GoogleReviewCard
							key={index}
							name={item.name}
							image={item.image}
							time={item.time}
							color1={item.color1}
							color2={item.color2}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default GoogleReviews;
