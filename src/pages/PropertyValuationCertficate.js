import React from 'react';
import ImageLanding from '../assets/png2.png';
import { BiCheckCircle } from 'react-icons/bi';

const PropertyValuationCertficate = () => {
	return (
		<div className='networth-container'>
			<div className='networth-landing'>
				<div className='networth-landing-text'>
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
				<div className='networth-landing-img'>
					<img src={ImageLanding} alt='' />
				</div>
			</div>
			<div className='networth-container1'>
				<h2>Property Valuation by Government Approved Valuer</h2>
				<p>
					Only Government Approved Valuers (Engineer) Can work as Property
					Valuation Consultant in Ahmedabad, India. Property Means Tangible
					Assets Includes Apartment, Land, Flats, Buildings, Plot, Office,
					Residential or Commercial Spaces, Bungalows, factory building etc.
					Valuation are to be conducted basis on fair market value as per
					prevailing marketing situation as well as condition and place of
					property/Asset.
				</p>
			</div>
			<div className='property-container1'>
				<h2>Purpose of Property Valuation Certificate</h2>
				<div className='prop-cont1-content'>
					<div className='prop-cont1-left'>
						<div className=''>
							<i>
								<BiCheckCircle />
							</i>
							<span>Immigration/VISA Purpsoe</span>
							<i>
								<BiCheckCircle />
							</i>
							<span>Internal Transfer or Selling Purpose</span>
							<i>
								<BiCheckCircle />
							</i>
							<span>Capital Gain - Income Tax Purpose</span>
						</div>
					</div>
					<div className='prop-cont1-right'>
						<div className=''>
							<i>
								<BiCheckCircle />
							</i>
							<span>Wealth Tax purpsoe</span>
							<i>
								<BiCheckCircle />
							</i>
							<span>Valuation for IPO/REIT etc</span>
							<i>
								<BiCheckCircle />
							</i>
							<span>Assessment of Property/ Other Purpose</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PropertyValuationCertficate;
