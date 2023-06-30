import React, { useEffect } from 'react';
import itrLandingImg from '../assets/itrImage.jpg';
import CertificateForm from '../components/CertificateForm';
import { HiArrowCircleRight } from 'react-icons/hi';
import {
	TbHexagonLetterI,
	TbHexagonLetterT,
	TbHexagonLetterR,
} from 'react-icons/tb';
import { GiCheckMark } from 'react-icons/gi';
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
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
							repellendus error, architecto veritatis porro odit.
						</p>
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
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
							repellendus error, architecto veritatis porro odit.
						</p>
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
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
							repellendus error, architecto veritatis porro odit.
						</p>
					</div>
				</div>
			</div>
			<div className='itr-container3'>
				<div className='itr-bg'></div>
				<div className='itr-cont3-content'>
					<div className='itr-cont3-text'>
						<h2>WE'RE HERE TO HELP</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Molestiae facere porro soluta sequi ex aliquam.
						</p>
					</div>
					<div className='itr-cont3-text'>
						<h2>PROPER GUIDANCE</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Molestiae facere porro soluta sequi ex aliquam.
						</p>
					</div>
				</div>
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
