import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const TimelineElement = ({
	elementIcon,
	elementTitle,
	elementDetails,
	contentStyle,
	contentArrowStyle,
	iconStyle,
}) => {
	return (
		<VerticalTimelineElement
			className='vertical-timeline-element--education'
			contentStyle={contentStyle}
			contentArrowStyle={contentArrowStyle}
			iconStyle={iconStyle}
			icon={elementIcon}
		>
			<h3 className='vertical-timeline-element-title'>{elementTitle}</h3>
			<p>{elementDetails}</p>
		</VerticalTimelineElement>
	);
};

export default TimelineElement;
