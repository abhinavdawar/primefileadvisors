import React, { useEffect } from 'react';
import ImageLanding from '../assets/png9.png';
import BubbleBackground from '../components/BubbleBackground';
import {
	PropertyValPurposeA,
	PropertyValPurposeB,
	PropertyDocDataA,
	PropertyDocDataB,
} from '../components/ServicesData';
import { BiCheckCircle } from 'react-icons/bi';
import { PropertyValuationTimeline } from '../components/Timeline';
import CertificateForm from '../components/CertificateForm';
import { motion } from 'framer-motion';
import { Zoom, Fade } from 'react-awesome-reveal';
const service_id = '';
const template_id = '';
const user_id = '';

const PropertyValuationCertficate = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<motion.div
			className='property-container'
			initial={{ width: '0' }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
		>
			<div className='property-landing'>
				<div className='property-landing-text'>
					<h1>Property Valuation Consultant in Chandigarh</h1>
					<p>
						Are you looking for a Property Valuation Consultant Near you in
						Chandigarh? Legal Adda can deliver Real Estate valuation Reports in
						Just 60 Minutes.
					</p>
					<p>
						Property Valuation Reports commonly used for VISA/Immigration,
						Wealth Tax Purpsoe, Capital Gain Purpose, Proeprty Transfer Purpsoe.
						Get your property Valued by Government Recognized Valuer (Engineer).
					</p>
				</div>
				<div className='property-landing-img'>
					<Fade direction='right'>
						<img src={ImageLanding} alt='' />
					</Fade>
				</div>
			</div>
			<div className='property-container1'>
				<h2>Property Valuation by Government Approved Valuer</h2>
				<p>
					Only Government Approved Valuers (Engineer) Can work as Property
					Valuation Consultant in Chandigarh, India. Property Means Tangible
					Assets Includes Apartment, Land, Flats, Buildings, Plot, Office,
					Residential or Commercial Spaces, Bungalows, factory building etc.
					Valuation are to be conducted basis on fair market value as per
					prevailing marketing situation as well as condition and place of
					property/Asset.
				</p>
			</div>
			<div className='property-container2'>
				<h2>Purpose of Property Valuation Certificate</h2>
				<div className='prop-cont2-content'>
					<Zoom direction='bottom'>
						<div className='prop-cont2-left'>
							{PropertyValPurposeA.map((purpose) => (
								<div key={purpose.name}>
									<i>
										<BiCheckCircle />
									</i>
									<span>{purpose.name}</span>
								</div>
							))}
						</div>
					</Zoom>
					<Zoom direction='bottom'>
						<div className='prop-cont2-right'>
							{PropertyValPurposeB.map((purpose) => (
								<div key={purpose.name}>
									<i>
										<BiCheckCircle />
									</i>
									<span>{purpose.name}</span>
								</div>
							))}
						</div>
					</Zoom>
				</div>
			</div>

			<div className='property-container3'>
				<h2>What are the Documents required for Property Valuation Report?</h2>
				<div className='prop-cont3-content'>
					<Fade direction='left'>
						<div className='prop-cont3-left'>
							{PropertyDocDataA.map((doc) => (
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
							{PropertyDocDataB.map((doc) => (
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
				<h2 className='timeline-heading'>
					Property Valuation Report from Chartered Engineer (Recognized
					Engineer) in 60 Mins.
				</h2>
				<PropertyValuationTimeline />
			</div>
			<div className='property-form'>
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

export default PropertyValuationCertficate;
