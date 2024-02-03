import React from 'react';
import CustomForm from '../components/CustomForm';
import ITRFeatureCard from '../components/ITRFeatureCard';
import { FaClock, FaEye } from 'react-icons/fa';
import { GiCheckMark, GiReceiveMoney } from 'react-icons/gi';

const ITRLanding = () => {
	const FeaturesArr = [
		{ name: '24 x 7 Online Support', icon: <FaClock /> },
		{ name: 'Review by CA', icon: <FaEye /> },
		{ name: 'Tax Saving Advice', icon: <GiReceiveMoney /> },
		{ name: 'Guaranteed Maximum Return', icon: <GiCheckMark /> },
	];
	return (
		<div className='itrpage-landing-container'>
			<h1>ITR Filing Consultant - Income Tax Return Filing</h1>
			<p>
				We are India’s Best Income Tax Consultant for Income Tax Return (ITR)
				Filing Services in Chandighar, India.
			</p>
			<p>
				We Provide Dedicated Chartered Accountant for Your ITR Preparation &
				Filings.
			</p>
			<p>
				100% Online Process | Guaranteed Timely Support For Tax Return Filing.
			</p>
			<h2>Are You Looking for ITR Consultant (CA) Near You?</h2>
			<div className='itrpage-landing-form'>
				<CustomForm Horizontal />
			</div>
			<div className='itrpage-features-container'>
				<h2>Prime File Advisor's Specialization in ITR Filling</h2>
				<div className='itrpage-features'>
					{FeaturesArr.map((item, index) => (
						<ITRFeatureCard
							key={index}
							featureText={item.name}
							icon={item.icon}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ITRLanding;
