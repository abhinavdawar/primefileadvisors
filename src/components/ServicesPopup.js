import React, { useEffect, useState } from 'react';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { TbSquareRoundedArrowRightFilled } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

const othServicesArrA = [
	'F & B License Registration',
	'ROC Compliance of Companies',
	'Partnership Registration',
	'Proprietorship Registration',
	'Incorporation of Pvt. Ltd. Company',
	'Incorporation of LLP',
	'Incorporation of One Person Company',
	'MSME Registration',
	'Shop Act/Labour Licenses',
];
const othServicesArrB = [
	'Start up India Registration',
	'DSC',
	'Trademark Registration',
	'Annual ROC Filing of Private Limited/LLP/OPC',
	'GST Registration and Filing Services',
	'TDS Return Filings',
	'PAN/TAN Applications',
	'ITR Filing',
	'Income Tax Cases Appeal',
];
const othServicesArrC = [
	'GST Case and Appeal',
	'VAT Case and Appeal',
	'Accounting',
	'CA Valuation/Networth Valuation',
	'Property Valuation',
	'Tax Planning',
	'Income Tax Consultants',
	'Internal Auditors',
];

const ServicesPopup = ({ popup, setPopup }) => {
	const [close, setClose] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		setClose(popup);
	}, [popup]);

	return (
		<section
			className={!close ? 'services-popup close' : 'services-popup open'}
		>
			<div className='services-popup-details'>
				<button
					className='close-button'
					onClick={() => {
						setClose(!close);
						setPopup(false);
					}}
				>
					<i>
						<IoCloseCircleSharp />
					</i>
				</button>
				<div className='footer-heading'>
					<h6>Our Services</h6>
				</div>
				<div className='services'>
					<div className='services-div'>
						{othServicesArrA.map((item, index) => (
							<div key={index} className='footer-service-link'>
								<i>
									<TbSquareRoundedArrowRightFilled />
								</i>
								{item}
							</div>
						))}
					</div>
					<div className='services-div'>
						{othServicesArrB.map((item, index) => (
							<div key={index} className='footer-service-link'>
								<i>
									<TbSquareRoundedArrowRightFilled />
								</i>
								{item}
							</div>
						))}
					</div>
					<div className='services-div'>
						{othServicesArrC.map((item, index) => (
							<div key={index} className='footer-service-link'>
								<i>
									<TbSquareRoundedArrowRightFilled />
								</i>
								{item}
							</div>
						))}
					</div>
				</div>

				<div className='services-popup-buttons'>
					<button
						onClick={() => {
							window.open('tel:+919876660279');
						}}
						className='services-button'
					>
						+91 9876660279
					</button>
					<button
						onClick={() => {
							navigate('/contact-us');
						}}
						className='services-button'
					>
						Contact us
					</button>
				</div>
			</div>
		</section>
	);
};

export default ServicesPopup;
