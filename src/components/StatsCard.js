import React from 'react';
import { Zoom } from 'react-awesome-reveal';

const StatsCard = ({ Number, StatTitle }) => {
	return (
		<div className='stats'>
			<Zoom>
				<h6 className=''>{Number}</h6>
			</Zoom>
			<p>{StatTitle}</p>
		</div>
	);
};

export default StatsCard;
