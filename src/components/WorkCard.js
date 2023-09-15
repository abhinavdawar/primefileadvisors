import React from 'react';

const WorkCard = ({ workTitle, CardIcon }) => {
	return (
		<div className='work'>
			<i className=''>{CardIcon}</i>
			<p className=''>{workTitle}</p>
		</div>
	);
};

export default WorkCard;
