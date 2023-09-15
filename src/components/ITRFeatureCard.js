import React from 'react';
import { GiCheckMark } from 'react-icons/gi';

const ITRFeatureCard = ({ featureText1, featureText2 }) => {
	return (
		<div className='itr-feature'>
			<i>
				<GiCheckMark />
			</i>
			<h1>
				{featureText1}
				<br />
				{featureText2}
			</h1>
		</div>
	);
};

export default ITRFeatureCard;
