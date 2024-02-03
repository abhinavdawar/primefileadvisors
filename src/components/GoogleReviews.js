import React from 'react';
import Logo from '../assets/logoTrans.png';
import { FaStar } from 'react-icons/fa';

const ReviewArr = [
	{
		name: 'Rishabh Tanwar',
		time: '1 month ago',
	},
	{
		name: 'Rishabh Tanwar',
		time: '1 month ago',
	},
	{
		name: 'Rishabh Tanwar',
		time: '1 month ago',
	},
	{
		name: 'Rishabh Tanwar',
		time: '1 month ago',
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
					<div className='google-reviews-company-name'>
						<img src={Logo} alt='' />
						<h2>Prime File Advisors</h2>
					</div>
					<p>House|Flat|Building|City</p>
					<div className='google-reviews-company-rating'>
						<h3>5.0</h3>
						<Star />
						<span>200 reviews</span>
					</div>
				</div>
				<div className='google-reviews-details'>
					{ReviewArr.map((item, index) => (
						<div key={index} className='google-review'>
							<div className='google-review-image'></div>
							<div className='google-review-info'>
								<h5>{item.name}</h5>
								<Star small />
								<p>{item.time}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default GoogleReviews;
