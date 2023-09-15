import React from 'react';

const ReviewCard = ({ id, name, from, reviewText, imageUrl }) => {
	return (
		<div className='review' key={id} >
			<div className='reviewer-details'>
				<figure style={{ backgroundImage: `url(${imageUrl})` }}></figure>
				<div className='details'>
					<div className='name'>{name}</div>
					<div className='from'>{from}</div>
				</div>
			</div>
			<p className='review-text'>{reviewText}</p>
		</div>
	);
};

export default ReviewCard;
