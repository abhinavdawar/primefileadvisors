import React, { useEffect } from 'react';
import HomeLanding from '../components/HomeLanding';
import CompanyCard from '../components/CompanyCard';
import GoogleReviews from '../components/GoogleReviews';
import Card1 from '../components/Card1';
import { TbSquareRoundedArrowRightFilled } from 'react-icons/tb';
import {
	featuresArr1,
	featuresArr2,
	TeamArr,
} from '../components/ServicesData';
import { motion } from 'framer-motion';

const Homepage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<motion.div
			className='homepage-container'
			initial={{ width: '0' }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
		>
			<div className='homepage-landing'>
				<HomeLanding />
			</div>
			<div className='team-container'>
				<h1>Prime File Advisors Team Consists</h1>
				<div className='team-details'>
					{TeamArr.map((item, index) => (
						<Card1
							key={index}
							Text={item.text}
							color1={item.color1}
							color2={item.color2}
							icon={item.icon}
						/>
					))}
				</div>
			</div>
			<div className='homepage-features-container'>
				<h1>Prime File Advisors - Nearest Consultant for All Compliance</h1>
				<div className='homepage-features'>
					<div className='homepage-features-details'>
						{featuresArr1.map((item, index) => (
							<h5 key={index}>
								<i>
									<TbSquareRoundedArrowRightFilled />
								</i>
								{item}
							</h5>
						))}
					</div>
					<CompanyCard />
					<div className='homepage-features-details'>
						{featuresArr2.map((item, index) => (
							<h5 key={index}>
								<i>
									<TbSquareRoundedArrowRightFilled />
								</i>
								{item}
							</h5>
						))}
					</div>
				</div>
			</div>
			<GoogleReviews />
		</motion.div>
	);
};

export default Homepage;
