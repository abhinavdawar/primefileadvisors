import React from 'react';

const PriceCard = ({ cardTitle, price, cardDetails, cardIcon }) => {
	return (
		<div className='price'>
			<div className='price-head'>
				<i>{cardIcon}</i>
				<h2>{cardTitle}</h2>
			</div>

			<h1>
				<span>₹</span>
				{price}
			</h1>
			<h3>{cardDetails}</h3>
		</div>
	);
};

export default PriceCard;
