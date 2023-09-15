import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
const Accordion = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState(-1);
	const handleClick = (index) => {
		setActiveIndex(index === activeIndex ? -1 : index);
	};
	return (
		<>
			{items.map((item, index) => (
				<button
					onClick={() => handleClick(index)}
					direction='left'
					key={item.title}
					className='accordion-item'
				>
					<div className='accordion-head'>
						<div className='accordion-title'>{item.title}</div>
						{index === activeIndex ? (
							<i className='accordion-icon'>
								<FiMinus />
							</i>
						) : (
							<i className='accordion-icon'>
								<FiPlus />
							</i>
						)}
					</div>
					{index === activeIndex && (
						<p className='accordion-content'>{item.content}</p>
					)}
				</button>
			))}
		</>
	);
};
export default Accordion;
