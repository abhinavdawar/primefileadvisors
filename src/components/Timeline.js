import React from 'react';
import TimelineElement from './TimelineElement';
import { PropertyTimelineData, ITRTimelineData } from './TimelineData';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const PropertyValuationTimeline = () => {
	return (
		<VerticalTimeline style={{ overflow: 'hidden !important' }}>
			{PropertyTimelineData.map((timeline) => (
				<TimelineElement
					key={timeline.id}
					elementIcon={timeline.icon}
					elementTitle={timeline.title}
					elementDetails={timeline.subtitle}
					contentStyle={timeline.contentStyle}
					contentArrowStyle={timeline.contentArrowStyle}
					iconStyle={timeline.iconStyle}
				/>
			))}
		</VerticalTimeline>
	);
};
export const ITRTimeline = () => {
	return (
		<VerticalTimeline style={{ overflow: 'hidden !important' }}>
			{ITRTimelineData.map((timeline) => (
				<TimelineElement
					key={timeline.id}
					elementIcon={timeline.icon}
					elementTitle={timeline.title}
					elementDetails={timeline.subtitle}
					contentStyle={timeline.contentStyle}
					contentArrowStyle={timeline.contentArrowStyle}
					iconStyle={timeline.iconStyle}
				/>
			))}
		</VerticalTimeline>
	);
};
