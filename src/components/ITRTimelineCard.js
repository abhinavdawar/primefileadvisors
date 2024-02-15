import React from 'react';

const ITRTimelineCard = ({ number, color, text, icon }) => {
	return (
		<div className='timeline-item' style={{ '--color': `${color}` }}>
			<div className='timeline-item-numberWrap'>
				<div className='timeline-item-number'>{number}</div>
				<div className='timeline-item-coverWrap'>
					<div className='timeline-item-numberCover'></div>
				</div>
			</div>
			<div className='timeline-item-content'>
				<div className='timeline-item-icon'>{icon}</div>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default ITRTimelineCard;
