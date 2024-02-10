import React, { useEffect } from 'react';
import CustomForm from '../components/CustomForm';
import { TbSquareRoundedArrowRightFilled } from 'react-icons/tb';
import {
	CAValuationReqArrA,
	CAValuationReqArrB,
	CAValuationReportArrA,
	CAValuationReportArrB,
	CAValuationCertiArrA,
	CAValuationCertiArrB,
} from '../components/ServicesData';
import { motion } from 'framer-motion';
import PropertyTimeline from '../components/PropertyTimeline';
import HorizontalTimeline from '../components/HorizontalTimeline';
import CompanyCard from '../components/CompanyCard';

const CAValuation = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<motion.div
			className='cavaluation-container'
			initial={{ width: '0' }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
		>
			<div className='landing-container'>
				<h2>Chartered Accountant (CA) Certificate for VISA</h2>
				<p>
					Looking for CA Certificate for VISA? We are providing Chartered
					Accountant (CA) Valuation Report for VISA and Immigration Purpose. CA
					Report is most essential document for VISA Application for Foreign
					countries like Canada, USA, UK, Australia etc. Connect with us for
					your CA Certificate requirement, we will deliver CA Wealth/Property
					Report within 3 Hour. We are also available at near to you across
					India.
				</p>
				<h2>Interested in CA Certificate for VISA? Get in 3 Hour</h2>
				<div className='itrpage-landing-form'>
					<CustomForm Horizontal />
				</div>
			</div>
			<div className='capage-report-summary-container'>
				<h2>Chartered Accountant Report for Immigration</h2>
				<div className='capage-report-summary-details'>
					<div className='capage-report-summary'>
						<p className='text'>
							A CA (Chartered Accountant) Certificate is a very important paper
							you need when you want to go to different countries. This paper is
							like a confirmation from a qualified and working Chartered
							Accountant saying that you have enough money and a good financial
							background. This is needed for visa applications.
						</p>
						<p className='text'>
							The CA Certificate for Visa tells the embassy or consulate of the
							country you want to go to that you can afford to stay there and
							travel around. The certificate usually includes details about your
							money situation, like how much you earn, what you own, what you
							owe, and your tax information. It also checks if the papers you
							gave about your money are real, like bank statements and tax
							returns.
						</p>
					</div>
					<CompanyCard />
				</div>
				<p className='text'>
					To get a CA Certificate for Visa, you have to give your financial
					papers and information to a working Chartered Accountant. They check
					everything, review your money situation, and then give you the
					certificate on their official letter paper with their signature and
					stamp. The CA also generates a special number called UDIN for the
					certificate.
				</p>
				<p className='text'>
					For some visas, like Student Visa, Tourist Visa, Work Permits, Visitor
					Visa, business, or investor visas, you must have a CA Certificate for
					Immigration. But for other visas, it depends on what the embassy or
					consulate of the country wants.
				</p>
				<p className='text'>
					In summary, the CA Certificate for Visa is very important for going to
					different countries. It tells the embassy or consulate that you have
					enough money to support yourself while you're there. It's a good idea
					to talk to a qualified Chartered Accountant to make sure you get a
					valid and accurate CA Certificate for Visa.
				</p>
			</div>
			<div className='capage-requirement-container'>
				<h1>Who required CA Wealth/Property Report for VISA?</h1>
				<div className='capage-requirements'>
					<div className='capage-requirement'>
						{CAValuationReqArrA.map((doc, index) => (
							<h5 key={index}>
								<i>
									<TbSquareRoundedArrowRightFilled />
								</i>
								{doc}
							</h5>
						))}
					</div>
					<div className='capage-requirement'>
						{CAValuationReqArrB.map((doc, index) => (
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
			<div className='capage-requirement-container capage-report-container'>
				<h1>
					What can be included in Chartered Accountant Report of Net Worth?
				</h1>
				<div className='capage-requirements'>
					<div className='capage-requirement'>
						{CAValuationReportArrA.map((doc, index) => (
							<h5 key={index}>
								<i>
									<TbSquareRoundedArrowRightFilled />
								</i>
								{doc}
							</h5>
						))}
					</div>
					<div className='capage-requirement'>
						{CAValuationReportArrB.map((doc, index) => (
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
			<div className='capage-requirement-container'>
				<h1>CA Valuation Certificate Must Contain Followings</h1>
				<div className='capage-requirements'>
					<div className='capage-requirement'>
						{CAValuationCertiArrA.map((doc, index) => (
							<h5 key={index}>
								<i>
									<TbSquareRoundedArrowRightFilled />
								</i>
								{doc}
							</h5>
						))}
					</div>
					<div className='capage-requirement'>
						{CAValuationCertiArrB.map((doc, index) => (
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
			<div className='timeline-mobile-view'>
				<PropertyTimeline />
			</div>
			<div className='timeline-screen-view'>
				<HorizontalTimeline />
			</div>
		</motion.div>
	);
};

export default CAValuation;
