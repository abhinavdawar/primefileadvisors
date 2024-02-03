import React from 'react';
import HomeLanding from '../components/HomeLanding';
import CompanyCard from '../components/CompanyCard';
import GoogleReviews from '../components/GoogleReviews';
import { TbSquareRoundedArrowRightFilled } from 'react-icons/tb';
const HomepageNew = () => {
	const featuresArr1 = [
		'Available 24 × 7',
		'Serving Across India',
		'Five Star Google Ratings',
		'All Compliance at One Place',
		'Best Consultants',
	];
	const featuresArr2 = [
		'No Advance Payment',
		'Expertise of CA',
		'Timely Completion',
		'Assured Work',
		'Fast and Quality Work',
	];

	return (
		<div className='homepage-container'>
			<div className='homepage-landing'>
				<HomeLanding />
			</div>
			<div className='team-container'>
				<h1>Prime File Advisors Team Consists</h1>
				<div className='team-details'>
					<h3>Chartered Accountants (CA)</h3>
					<h3>Company Secretary (CS)</h3>
					<h3>Property Evaluators</h3>
				</div>
			</div>
			<div className='homepage-features-container'>
				<h1>Legal Adda - Nearest Consultant for All Compliance</h1>
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
		</div>
	);
};

export default HomepageNew;
