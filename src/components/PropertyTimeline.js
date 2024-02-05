import React from 'react';
import { FaHandshake } from 'react-icons/fa';
import { HiDocumentReport } from 'react-icons/hi';
import { BsFileEarmarkCheckFill } from 'react-icons/bs';

const PropertyTimeline = () => {
	return (
		<div className='property-timeline-container'>
			<h3>
				Property Valuation Report from Chartered Engineer (Recognized Engineer)
				in 60 Mins.
			</h3>
			<section id='cd-timeline' className='cd-container'>
				<div className='cd-timeline-block' style={{ '--color': '#d65d6a' }}>
					<div
						className='cd-timeline-img cd-picture'
						style={{ '--color': '#d65d6a' }}
					>
						<i>
							<FaHandshake />
						</i>
					</div>
					<div className='cd-timeline-content'>
						<h2>Send us documents for Property Valuation</h2>
						<p>
							Connect with us, Send us Property ownership proof & identity proof
							via Email or WhatsApp.
						</p>
						<span className='cd-date'>Step 1</span>
					</div>
				</div>
				<div className='cd-timeline-block' style={{ '--color': '#39a7b0' }}>
					<div
						className='cd-timeline-img cd-picture'
						style={{ '--color': '#39a7b0' }}
					>
						<i>
							<BsFileEarmarkCheckFill />
						</i>
					</div>
					<div className='cd-timeline-content'>
						<h2>Document Checking and Preparation of Report</h2>
						<p>
							On Receiving Document, Our Government Approved Value will check
							all documents and if required they will conduct field visit. After
							assessment of document and Property, Our Government Approved
							Valuer will issue Property Valutaiton Report.
						</p>
						<span className='cd-date'>Step 2</span>
					</div>
				</div>
				<div className='cd-timeline-block' style={{ '--color': '#f1a25e' }}>
					<div
						className='cd-timeline-img cd-picture'
						style={{ '--color': '#f1a25e' }}
					>
						<i>
							<HiDocumentReport />
						</i>
					</div>
					<div className='cd-timeline-content'>
						<h2>Get Property Valuation Report in One Hour</h2>
						<p>
							You will Get Property Valuation Report within one hour of
							Assessment.
						</p>
						<span className='cd-date'>Step 3</span>
					</div>
				</div>
			</section>
		</div>
	);
};

export default PropertyTimeline;
