import React from 'react';
import { Star } from './GoogleReviews';

const GoogleReviewCard = ({ name, image, time, color1, color2 }) => {
	return (
		<div className='google-card' style={{ '--color1': `${color1}` }}>
			<div
				className='google-card-border-top'
				style={{ '--color2': `${color2}` }}
			></div>
			<div className='google-img'>
				<img src={image} alt='' />
			</div>
			<span>{name}</span>
			<div className='google-star-info'>
				<Star small />
			</div>
			<p className='google-time'>{time}</p>
		</div>
	);
};

export default GoogleReviewCard;
