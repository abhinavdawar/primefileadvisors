import React, { useEffect } from 'react';
import ITRLanding from '../components/ITRLanding';
import { ITRDocDataA, ITRDocDataB } from '../components/ServicesData';
import CompanyCard from '../components/CompanyCard';
import ITRTimeline from '../components/ITRTimeline';
import GoogleReviews from '../components/GoogleReviews';
import { TbSquareRoundedArrowRightFilled } from 'react-icons/tb';
import { motion } from 'framer-motion';
const ITRPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<motion.div
			className='itrpage-container'
			initial={{ width: '0' }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
		>
			<ITRLanding />
			<div className='itrpage-details-container '>
				<h1>ITR (Income Tax Return) Filing Consultant</h1>
				<p>
					Are you looking for someone to help you with filing your Income Tax
					Return in India? Prime File Advisors is your go-to online service
					provider for Income Tax Return.
				</p>
				<p>
					If you earn money in India and it's above a certain limit (Currently
					INR 250,000), it's mandatory to file your Income Tax Return. Prime
					File Advisors offers the best online consultancy services for Income
					Tax Return filing. Our team of experienced chartered accountants is
					here to help you prepare and file your tax return. We provide
					round-the-clock online support for any questions you may have about
					filing your income tax return, and we can even offer in-person
					services at your home, site, or office in Chandigarh or Mohali.
				</p>
				<p>
					Our team doesn't just file your tax return; they also guide you
					through the process and provide advice on how to save on taxes.
					Additionally, our highly experienced chartered accountants ensure the
					quality of the prepared return.
				</p>
			</div>
			<div className='itrpage-requirement-container'>
				<h1>What are the Documents required for Income Tax Return?</h1>
				<div className='itrpage-requirements'>
					<div className='itrpage-requirement'>
						{ITRDocDataA.map((doc, index) => (
							<h5 key={index}>
								<i>
									<TbSquareRoundedArrowRightFilled />
								</i>
								{doc}
							</h5>
						))}
					</div>
					<CompanyCard />
					<div className='itrpage-requirement'>
						{ITRDocDataB.map((doc, index) => (
							<h5 key={index}>
								<i>
									<TbSquareRoundedArrowRightFilled />
								</i>
								{doc}
							</h5>
						))}
					</div>
				</div>
			</div>
			<div className='itrpage-steps-container'>
				<h1>Income Tax Return Filing Process : Get it Done in 30 Min.</h1>
				<ITRTimeline />
			</div>
			<GoogleReviews />
		</motion.div>
	);
};

export default ITRPage;
