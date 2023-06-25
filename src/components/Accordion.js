import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
const Accordion = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState(-1);
	const handleClick = (index) => {
		setActiveIndex(index === activeIndex ? -1 : index);
	};
	return (
		<>
			{items.map((item, index) => (
				// <Fade direction='left'>
				<Fade direction='left' key={item.title} className='accordion-item'>
					<button
						onClick={() => handleClick(index)}
						className='accordion-title'
					>
						{item.title}
					</button>
					{index === activeIndex && (
						<p className='accordion-content'>{item.content}</p>
					)}
				</Fade>
				// </Fade>
			))}
		</>
	);
};
export default Accordion;
