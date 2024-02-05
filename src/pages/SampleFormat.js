import React, { useEffect } from 'react';
import CustomForm from '../components/CustomForm';
import { SamplePageData } from '../components/ServicesData';
import SampleCertificate from '../components/SampleCertificate';
import PropertyTimeline from '../components/PropertyTimeline';
import { motion } from 'framer-motion';

const SampleFormat = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<motion.div
			className='samplepage-container'
			initial={{ width: '0' }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
		>
			<div className='samplepage-landing-container'>
				<h1>Property Valuation Report Format</h1>
				<p>
					Sample Format of Property Valuation Depends on Purpose of usage.
					Property Valuation from Government Approved Licensed Valuer should
					contain certain minimum information of owner and property. Further,
					Method of Valuation should be clearly stated in report itself. we have
					multiple format which can be customized as per requirement of client
					and use.
				</p>
				<h2>Are You Looking for Property Valuation Certificate?</h2>
				<div className='samplepage-landing-form'>
					<CustomForm Horizontal />
				</div>
			</div>
			<div className='samplepage-details-container'>
				<h2>What Should Be Included in Property Valuation Format?</h2>
				<p>
					A property valuation report is like a detailed document that guesses
					how much a property is worth. It looks closely at the property and the
					nearby area and talks about things that can affect its value. Here are
					some important things that should be in a property valuation report:
				</p>
				{SamplePageData.map((item, index) => (
					<ul key={index}>
						<li className='samplepage-detail'>{item}</li>
					</ul>
				))}
				<p>
					In simple words, a property valuation report should be a careful look
					at a property's worth, with clear information. It should help anyone,
					even someone from a foreign embassy, understand it without any
					trouble.
				</p>
				<p>
					If you need a specific format or a sample, feel free to ask for an
					Excel or Word file.
				</p>
			</div>
			<div className='samplepage-reports-container'>
				<h2>Sample Copy of Valuer Certificate for VISA Purpose</h2>
				<div className='sample-page-reports'>
					<div className='samplepage-report-container'>
						<div className='samplepage-report report1'></div>
						<p>Page 1: Valuation Certificate</p>
					</div>
					<div className='samplepage-report-container'>
						<div className='samplepage-report report2'></div>
						<p>Page 2: Report with sign</p>
					</div>
				</div>
			</div>
			<SampleCertificate />
			<PropertyTimeline />
		</motion.div>
	);
};

export default SampleFormat;
