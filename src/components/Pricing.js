import React from 'react';
import PriceCard from './PriceCard';
import { Link } from 'react-router-dom';
import { BiCheckCircle } from 'react-icons/bi';
import {
	FaGlobeAmericas,
	FaFileSignature,
	FaCcVisa,
	FaCalendarCheck,
} from 'react-icons/fa';
const Pricing = () => {
	return (
		<div className='pricing-container'>
			<div className='bg'></div>
			<div className='bg bg1'></div>
			<div className='bg bg2'></div>
			<h1 className='pricing-headline'>Our Pricing Options</h1>
			<p className='pricing-text'>
				If you have any questions regarding our packages, please refer to the
				F.A.Q or <Link to='/contact'>contact us</Link>
			</p>
			<div className='prices'>
				<PriceCard
					cardTitle='Net Worth Certification'
					price='1,500'
					cardDetails='Net Worth for Visa Application'
					cardIcon={<FaCcVisa />}
				/>
				<PriceCard
					cardTitle='Property Valuation Certification'
					price='1,500'
					cardDetails='Net Worth for Visa Application'
					cardIcon={<FaGlobeAmericas />}
				/>
				<PriceCard
					cardTitle='Income Tax Return'
					price='1,000'
					cardDetails='Income Tax Return for one Year'
					cardIcon={<FaCalendarCheck />}
				/>
			</div>
			<div className='package'>
				<div className='package-head'>
					<i>
						<FaFileSignature />
					</i>
					<h2>Complete Package</h2>
				</div>
				<h1>
					<span>₹</span>5,000
				</h1>
				<div className='package-details'>
					<div className='package-service'>
						<i>
							<BiCheckCircle />
						</i>
						<p>
							Three Years Income Tax Returns (excluding government penalty).
						</p>
					</div>
					<div className='package-service'>
						<i>
							<BiCheckCircle />{' '}
						</i>
						<p>Property Valuation for one property.</p>
					</div>
					<div className='package-service'>
						<i>
							<BiCheckCircle />{' '}
						</i>
						<p>Net Worth Certificate.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pricing;
