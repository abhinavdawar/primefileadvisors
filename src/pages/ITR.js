import React, { useEffect } from 'react';
import ITRFeatureCard from '../components/ITRFeatureCard';
import itrLandingImg from '../assets/itrImage.jpg';
import CertificateForm from '../components/CertificateForm';
import BubbleBackground from '../components/BubbleBackground';
import { ITRTimeline } from '../components/Timeline';
import { ITRDocDataA, ITRDocDataB } from '../components/ServicesData';
import { HiArrowCircleRight } from 'react-icons/hi';
import { BiCheckCircle } from 'react-icons/bi';
import { Fade } from 'react-awesome-reveal';
import {
	TbHexagonLetterI,
	TbHexagonLetterT,
	TbHexagonLetterR,
} from 'react-icons/tb';
const service_id = '';
const template_id = '';
const user_id = '';

const ITR = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className='itr-container'>
			<div className='itr-landing'>
				<div className='itr-landing-content'>
					<div className='itr-text'>
						<i className='itr-text-image'>
							<TbHexagonLetterI />
						</i>
						<i className='itr-text-image'>
							<TbHexagonLetterT />
						</i>
						<i className='itr-text-image'>
							<TbHexagonLetterR />
						</i>
					</div>
					<h1>
						Accurate
						<br />
						Tax Return Filing
					</h1>
					<div className='itr-landing-text'>
						<p>
							<HiArrowCircleRight /> Help at every step
						</p>
						<p>
							<HiArrowCircleRight /> SO Federal, SO State, SO All forms
						</p>
						<p>
							<HiArrowCircleRight /> Maximum Return guaranteed*
						</p>
					</div>
				</div>
				<div className='itr-back'>
					<img src={itrLandingImg} alt='' />
				</div>
			</div>
			<div className='networth-container1'>
				<h2>ITR Filing</h2>
				<p>
					ITR filing refers to the process of submitting income tax returns to
					the government within the specified due date. It is a legal obligation
					for individuals, businesses, and organizations earning an income to
					file their income tax returns annually. Filing income tax returns is
					important to avoid penalties and legal consequences, and also to claim
					refunds in case of excess tax paid. With our ITR filing services,
					clients can benefit from timely and accurate filing of returns,
					reduced tax liabilities, avoid penalties and legal consequences, and
					ensure compliance with tax laws and regulations. We ensure that our
					clients have a stress-free tax filing experience, with complete
					transparency and confidentiality.
				</p>
			</div>
			<div className='itr-container1'>
				<h1>100% Accurate.Maximum Refund Guaranteed.</h1>
				<div className='itr-features'>
					<ITRFeatureCard
						featureText1='Guaranteed'
						featureText2='Maximum Refund'
					/>
					<ITRFeatureCard
						featureText1='Zero Out of'
						featureText2='Pocket Fees'
					/>
					<ITRFeatureCard
						featureText1='100%'
						featureText2='Accurate Guarantee'
					/>
				</div>
			</div>
			<div className='property-container3'>
				<h2>What are the Documents required for Income Tax Return?</h2>
				<div className='prop-cont3-content'>
					<Fade direction='left'>
						<div className='prop-cont3-left'>
							{ITRDocDataA.map((doc) => (
								<div key={doc.name}>
									<i>
										<BiCheckCircle />
									</i>
									<span>{doc.name}</span>
								</div>
							))}
						</div>
					</Fade>
					<Fade direction='right'>
						<div className='prop-cont3-right'>
							{ITRDocDataB.map((doc) => (
								<div key={doc.name}>
									<i>
										<BiCheckCircle />
									</i>
									<span>{doc.name}</span>
								</div>
							))}
						</div>
					</Fade>
				</div>
			</div>
			<div className='timeline-container'>
				<h2 className='timeline-heading'>Process of ITR Filing</h2>
				<ITRTimeline />
			</div>
			<div className='itr-form'>
				<BubbleBackground />
				<CertificateForm
					service_id={service_id}
					template_id={template_id}
					user_id={user_id}
				/>
			</div>
		</div>
	);
};

export default ITR;
