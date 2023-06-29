import React, { useEffect } from 'react';
import ImageLanding from '../assets/png9.png';
// import ImageLanding from '../assets/black_5.png';
import { BiCheckCircle } from 'react-icons/bi';
import { BsFileEarmarkCheckFill } from 'react-icons/bs';
import { FaHandshake } from 'react-icons/fa';
import { HiDocumentReport } from 'react-icons/hi';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
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
							<div className=''>
								<i>
									<BiCheckCircle />
								</i>
								<span>Immigration/VISA Purpsoe</span>
							</div>
							<div className=''>
								<i>
									<BiCheckCircle />
								</i>
								<span>Internal Transfer or Selling Purpose</span>
							</div>
							<div className=''>
								<i>
									<BiCheckCircle />
								</i>
								<span>Capital Gain - Income Tax Purpose</span>
							</div>
						</div>
					</Zoom>
					<Zoom direction='bottom'>
						<div className='prop-cont2-right'>
							<div className=''>
								<i>
									<BiCheckCircle />
								</i>
								<span>Wealth Tax purpsoe</span>
							</div>
							<div className=''>
								<i>
									<BiCheckCircle />
								</i>
								<span>Valuation for IPO/REIT etc</span>
							</div>
							<div className=''>
								<i>
									<BiCheckCircle />
								</i>
								<span>Assessment of Property/ Other Purpose</span>
							</div>
						</div>
					</Zoom>
				</div>
			</div>

			<div className='property-container3'>
				<h2>What are the Documents required for Property Valuation Report?</h2>
				<div className='prop-cont3-content'>
					<Fade direction='left'>
						<div className='prop-cont3-left'>
							<div className=''>
								<i>
									<BiCheckCircle />
								</i>
								<span>Adhar Card of Applicant</span>
							</div>
							<div className=''>
								<i>
									<BiCheckCircle />
								</i>
								<span>PAN Card of Applicant</span>
							</div>
							<div className=''>
								<i>
									<BiCheckCircle />
								</i>
								<span>Ownership Proof (Tax Bill or Electricity Bill)</span>
							</div>
						</div>
					</Fade>
					<Fade direction='right'>
						<div className='prop-cont3-right'>
							<div className=''>
								<i>
									<BiCheckCircle />
								</i>
								<span>Index Copy/ Purchase Agreement</span>
							</div>
							<div className=''>
								<i>
									<BiCheckCircle />
								</i>
								<span>List of Furniture and Attached assets</span>
							</div>
							<div className=''>
								<i>
									<BiCheckCircle />
								</i>
								<span>Email and Mobile Number</span>
							</div>
						</div>
					</Fade>
				</div>
			</div>

			<div className='timeline-container'>
				<h2 className='timeline-heading'>
					Property Valuation Report from Chartered Engineer (Recognized
					Engineer) in 60 Mins.
				</h2>
				<VerticalTimeline>
					<VerticalTimelineElement
						className='vertical-timeline-element--work'
						contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
						contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
						date='Step 1'
						iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
						icon={<FaHandshake />}
					>
						<h3 className='vertical-timeline-element-subtitle'>
							Send us documents for Property Valuation
						</h3>
						<p>
							Connect with us, Send us Property ownership proof & identity proof
							via Email or WhatsApp.
						</p>
					</VerticalTimelineElement>

					<VerticalTimelineElement
						className='vertical-timeline-element--work'
						date='step 2'
						contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
						iconStyle={{
							background: 'rgb(233, 30, 99)',
							color: '#fff',
						}}
						icon={<BsFileEarmarkCheckFill />}
					>
						<h3 className='vertical-timeline-element-title'>
							Document Checking and Preparation of Report
						</h3>

						<p>
							On Receiving Document, Our Government Approved Value will check
							all documents and if required they will conduct field visit. After
							assessment of document and Property, Our Government Approved
							Valuer will issue Property Valutaiton Report.
						</p>
					</VerticalTimelineElement>

					<VerticalTimelineElement
						className='vertical-timeline-element--education'
						contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
						date='step 3'
						iconStyle={{ background: 'rgb(30, 233, 30)', color: '#fff' }}
						icon={<HiDocumentReport />}
					>
						<h3 className='vertical-timeline-element-title'>
							Get Property Valuation Report in One Hour
						</h3>
						<p>
							You will Get Property Valuation Report within one hour of
							Assessment.
						</p>
					</VerticalTimelineElement>
				</VerticalTimeline>
			</div>
			<div className='property-form'>
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
