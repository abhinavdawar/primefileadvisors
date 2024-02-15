import React from 'react';

const GoogleReviewCard = ({ name, time, color1, color2, rating }) => {
	return (
		<div className='google-card' style={{ '--color1': `${color1}` }}>
			<div
				className='google-card-border-top'
				style={{ '--color2': `${color2}` }}
			></div>
			<span>{name}</span>
			<div className='google-star-info'>
				<div className='stars' style={{ '--rating': `${rating}` }}></div>
			</div>
			<p className='google-time'>{time}</p>
		</div>
	);
};

export default GoogleReviewCard;
