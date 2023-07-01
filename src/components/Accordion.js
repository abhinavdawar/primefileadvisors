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
				<div direction='left' key={item.title} className='accordion-item'>
					<div className='accordion-title'>
						<button onClick={() => handleClick(index)}>{item.title}</button>
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
				</div>
			))}
		</>
	);
};
export default Accordion;
