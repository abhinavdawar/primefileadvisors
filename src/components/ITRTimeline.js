import React from 'react';
import ITRTimelineCard from './ITRTimelineCard';
import { HiDocumentCheck, HiDocumentMagnifyingGlass } from 'react-icons/hi2';
import { FaEye } from 'react-icons/fa';
import { TbReceiptTax } from 'react-icons/tb';
import { MdBusinessCenter } from 'react-icons/md';
import { BsShieldFillCheck } from 'react-icons/bs';

const ITRTimeline = () => {
	const ITRTimelineDataArr = [
		{
			number: 1,
			color: '#3498db',
			text: 'Gather Your Documents and Information',
			icon: <HiDocumentMagnifyingGlass />,
		},
		{
			number: 2,
			color: '#2ecc71',
			text: 'Reviewing Your ITR Documents and Details',
			icon: <FaEye />,
		},
		{
			number: 3,
			color: '#9b59b6',
			text: ' Creating a Summary of Your Income (CoI) and Calculating Tax',
			icon: <TbReceiptTax />,
		},
		{
			number: 4,
			color: '#f1c40f',
			text: 'Submit Your Income Tax Return (ITR) Online',
			icon: <MdBusinessCenter />,
		},
		{
			number: 5,
			color: '#e74c3c',
			text: 'Keep a Record of the Documents After Filing Your Income Tax Return Online',
			icon: <HiDocumentCheck />,
		},
		{
			number: 6,
			color: '#e67e22',
			text: 'Checking and Fixing Mistakes in Your Filed Return',
			icon: <BsShieldFillCheck />,
		},
	];
	return (
		<div className='timeline-container'>
			{ITRTimelineDataArr.map((item, index) => (
				<ITRTimelineCard
					key={index}
					number={item.number}
					text={item.text}
					color={item.color}
					icon={item.icon}
				/>
			))}
		</div>
	);
};

export default ITRTimeline;
