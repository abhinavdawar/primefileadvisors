import React from 'react';
import { Zoom } from 'react-awesome-reveal';

const FeatureCard = ({ cardIcon, feature }) => {
	return (
		<Zoom>
			<div className='feature'>
				<i style={{ fontSize: '25px' }}>{cardIcon}</i>
				<p className=''>{feature}</p>
			</div>
		</Zoom>
	);
};

export default FeatureCard;
