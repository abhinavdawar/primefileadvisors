import React from 'react';

const ITRFeatureCard = ({ icon, featureText, featureText2 }) => {
	return (
		<div className='itrpage-feature'>
			<i>{icon}</i>
			<h4>{featureText}</h4>
		</div>
	);
};

export default ITRFeatureCard;
