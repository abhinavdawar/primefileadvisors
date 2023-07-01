import React, { useEffect } from 'react';
import itrLandingImg from '../assets/itrImage.jpg';
import CertificateForm from '../components/CertificateForm';
import { HiArrowCircleRight } from 'react-icons/hi';
import { BiCheckCircle } from 'react-icons/bi';
import { Fade } from 'react-awesome-reveal';
import {
	TbHexagonLetterI,
	TbHexagonLetterT,
	TbHexagonLetterR,
} from 'react-icons/tb';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { HiDocumentReport } from 'react-icons/hi';
import { GiCheckMark } from 'react-icons/gi';
import { BsFileEarmarkCheckFill } from 'react-icons/bs';
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
							<HiArrowCircleRight> </HiArrowCircleRight> Help at every step
						</p>
						<p>
							<HiArrowCircleRight> </HiArrowCircleRight> SO Federal, SO State,
							SO All forms
						</p>
						<p>
							<HiArrowCircleRight> </HiArrowCircleRight> Maximum Return
							guaranteed*
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
				ITR filing refers to the process of submitting income tax returns to the government 
				within the specified due date. It is a legal obligation for individuals, businesses,
				and organizations earning an income to file their income tax returns annually. 
				Filing income tax returns is important to avoid penalties and legal consequences, 
				and also to claim refunds in case of excess tax paid.
				With our ITR filing services, clients can benefit from timely and accurate filing of returns,
				reduced tax liabilities, avoid penalties and legal consequences, and ensure compliance with 
				tax laws and regulations. We ensure that our clients have a stress-free tax filing experience, 
				with complete transparency and confidentiality.
				</p>
			</div>
			<div className='itr-container1'>
				<h1>100% Accurate.Maximum Refund Guaranteed.</h1>
				<div className='itr-features'>
					<div className='itr-feature'>
						<i>
							<GiCheckMark />
						</i>
						<h1>
							Guaranteed
							<br />
							Maximum Refund
						</h1>
					</div>
					<div className='itr-feature'>
						<i>
							<GiCheckMark />
						</i>
						<h1>
							Zero Out of
							<br />
							Pocket Fees
						</h1>
					</div>
					<div className='itr-feature'>
						<i>
							<GiCheckMark />
						</i>
						<h1>
							100%
							<br />
							Accurate Guarantee
						</h1>
					</div>
				</div>
			</div>
			<div className='property-container3'>
				<h2>What are the Documents required for Income Tax Return?</h2>
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
								<span>Form 16/16A</span>
							</div>
							<div className=''>
								<i>
									<BiCheckCircle />
								</i>
								<span>Form 26AS</span>
							</div>
						</div>
					</Fade>
					<Fade direction='right'>
						<div className='prop-cont3-right'>
							<div className=''>
								<i>
									<BiCheckCircle />
								</i>
								<span>Bank Statement</span>
							</div>
							<div className=''>
								<i>
									<BiCheckCircle />
								</i>
								<span>Investment Documents</span>
							</div>
							<div className=''>
								<i>
									<BiCheckCircle />
								</i>
								<span>Rent Agreement</span>
							</div>
							<div className=''>
								<i>
									<BiCheckCircle />
								</i>
								<span>Medical Bills</span>
							</div>
						</div>
					</Fade>
				</div>
			</div>
			<div className='timeline-container'>
				<h2 className='timeline-heading'>
					Process of ITR Filing
				</h2>
				<VerticalTimeline>
					<VerticalTimelineElement
						className='vertical-timeline-element--education'
						contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
						date='step 3'
						iconStyle={{ background: 'rgb(30, 233, 30)', color: '#fff' }}
						icon={<HiDocumentReport />}
					>
						<h3 className='vertical-timeline-element-subtitle'>
							Collecting Documents
						</h3>
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
							Calculating Tax Liability
						</h3>
					</VerticalTimelineElement>

					<VerticalTimelineElement
						className='vertical-timeline-element--education'
						contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
						date='step 3'
						iconStyle={{ background: 'rgb(30, 233, 30)', color: '#fff' }}
						icon={<HiDocumentReport />}
					>
						<h3 className='vertical-timeline-element-title'>
							Choosing Appropriate ITR Form
						</h3>
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
							Filing ITR online or offline
						</h3>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className='vertical-timeline-element--education'
						contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
						date='step 3'
						iconStyle={{ background: 'rgb(30, 233, 30)', color: '#fff' }}
						icon={<HiDocumentReport />}
					>
						<h3 className='vertical-timeline-element-title'>
							Verification by OTP
						</h3>
					</VerticalTimelineElement>
				</VerticalTimeline>
			</div>
			<div className='itr-form'>
				<ul class='bg-bubbles'>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
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
