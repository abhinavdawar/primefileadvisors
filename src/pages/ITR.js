import React, { useEffect } from 'react';
import itrLandingImg from '../assets/itrImage.jpg';
import IText from '../assets/IText.png';
import TText from '../assets/TText.png';
import RText from '../assets/RText.png';
import { HiArrowCircleRight } from 'react-icons/hi';
const ITR = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className='itr-container'>
			<div className='itr-landing'>
				<div className='itr-landing-content'>
					<div className='itr-text'>
						{/* <p className='itr-text-image'>ITR</p> */}
						<img className='itr-text-image' src={IText} alt='' />
						<img className='itr-text-image' src={TText} alt='' />
						<img className='itr-text-image' src={RText} alt='' />
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
		</div>
	);
};

export default ITR;
