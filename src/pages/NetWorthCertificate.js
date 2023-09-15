import React, { useEffect } from 'react';
import { BiCheckCircle } from 'react-icons/bi';
import CertificateForm from '../components/CertificateForm';
import { NetworthDataA, NetworthDataB } from '../components/ServicesData';
import BubbleBackground from '../components/BubbleBackground';
import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';

const service_id = 'service_bw9y36m';
const template_id = 'template_f6ufosr';
const user_id = 'SYmjrAocqWVoD6DDF';
const NetWorthCertificate = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<motion.div
			className='networth-container'
			initial={{ width: '0' }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
		>
			<div className='networth-landing'>
				<div className='networth-bg'></div>
				<div className='networth-landing-text'>
					<h1>Net Worth Certificate for VISA</h1>
					<div className='networth-landing-details'>
						<p>
							Do you required Networth Certificate for VISA Purpose? Prime File
							Advisors is Best Consultant for Networth Certificate. We provide
							Instant Delivery of Net Worth Certificate at your location.
						</p>
						<p>
							Commonly Networth Certificate required for VISA, Embassy/Consulate
							Interview, Loan, Insurance Purpose. We provide Chartered
							Accountant Certified Networth Certificate with UDIN.
						</p>
						<p>
							Networth Certificate also known as Wealth Certificate, Wealth
							Report, Asset and Liability Report, Wealth Statement.
						</p>
						<div className='circle'></div>
						<div className='circle-top'></div>
					</div>
				</div>
			</div>
			<div className='networth-container1'>
				<h2>Net Worth Certificate for VISA by CA (Chartered Accountant)</h2>
				<p>
					Are you in search of Chartered Accountant (CA) / Consultant for Net
					Worth Certificate for VISA? Prime File Advisors is Best Consultant
					Near to you for Preparation and Issuance of Networth Certificate. We
					provide Networth Certificate for VISA at all locations of India. We
					provide Instant Networth Certificate in Just 30 Minutes, Also we
					deliver Physical copy of certificate at your doorstep.
				</p>
			</div>
			<div className='networth-container2'>
				<h3>What is Networth Certificate for VISA?</h3>
				<p>
					Net Worth means the total Wealth of the person after deducting the
					total liability of person. Wealth Includes Immovable Properties and
					Movable Assets. Networth Certificate is the statement showing Total
					Movable Assets and Total Immovable Properties of Person. Generally
					Consulate or VISA Agent demands the statement of wealth commonly known
					as Networth Certificate for VISA.
				</p>
			</div>
			<div className='networth-container3'>
				<h1>What can be considered as Networth for VISA Purpose?</h1>
				<div className='networth-content'>
					<Fade direction='left'>
						<div className='networth-left'>
							<h6>Value of Immovable Property</h6>
							{NetworthDataA.map((asset) => (
								<div key={asset.name}>
									<i>
										<BiCheckCircle />
									</i>
									<span>{asset.name}</span>
								</div>
							))}
						</div>
					</Fade>
					<Fade direction='right'>
						<div className='networth-right'>
							<h6>Value of Movable Assets</h6>
							{NetworthDataB.map((asset) => (
								<div key={asset.name}>
									<i>
										<BiCheckCircle />
									</i>
									<span>{asset.name}</span>
								</div>
							))}
						</div>
					</Fade>
				</div>
			</div>
			<div className='networth-form'>
				<BubbleBackground />
				<CertificateForm
					service_id={service_id}
					template_id={template_id}
					user_id={user_id}
				/>
			</div>
		</motion.div>
	);
};

export default NetWorthCertificate;
