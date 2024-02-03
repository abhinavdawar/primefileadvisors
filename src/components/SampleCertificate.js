import React from 'react';
import { certificateDataArr } from './ServicesData';
const SampleCertificate = () => {
	return (
		<div className='samplepage-certificate-container'>
			<h2>Property Valuation Certificate Format</h2>
			<div className='samplepage-certificate'>
				<div className='samplepage-certificate-top'>
					<h6>CHARTERED ENGINEER (CE) – ARCHITECT</h6>
					<h6>GOVERNMENT APPROVED VALUER (LETTER HEAD)</h6>
					<h6>PROPERTY VALUATION REPORT FOR VISA</h6>
					<h6>CALL US : +91 9876660279</h6>
					<h6>VALUATION REPORT OF IMMOVABLE PROPERTY</h6>
				</div>
				<div className='samplepage-certificate-name-details'>
					<p>Date: 25/01/2024</p>
					<p>File No.: Certificate-1</p>
					<p>Name of Property Owner: Mr. Rajkumar Singh</p>
					<p>
						Purpose of Valuation: Property Valuation for VISA of Ms. Nisha Singh
						(Daughter)
					</p>
				</div>
				<div className='samplepage-certificate-details-container'>
					{certificateDataArr.map((item, index) => (
						<div className='samplepage-certificate-details' key={index}>
							<h6 className='samplepage-certificate-detail-title'>
								{item.title}
							</h6>
							<ul>
								{' '}
								{item.details.map((detail, index) => (
									<li key={index}>{detail}</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className='samplepage-certificate-bottom'>
					<h5>CALL US : +91 9876660279</h5>
					<p>Date:</p>
					<p>Signature of Govt Approved Valuer (With Seal and License No.)</p>
				</div>
			</div>
		</div>
	);
};

export default SampleCertificate;
