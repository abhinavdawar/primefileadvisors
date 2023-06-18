import React, { useState } from 'react';
const Accordion = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState(-1);
	const handleClick = (index) => {
		setActiveIndex(index === activeIndex ? -1 : index);
	};
	return (
		<>
			{items.map((item, index) => (
				<div key={item.title} className='accordion-item'>
					<button
						onClick={() => handleClick(index)}
						className='accordion-title'
					>
						{item.title}
					</button>
					{index === activeIndex && (
						<p className='accordion-content'>{item.content}</p>
					)}
				</div>
			))}
		</>
	);
};
export default Accordion;
