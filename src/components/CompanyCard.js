import React from 'react';
import Logo from '../assets/logoTrans.png';
import { BsFillTelephoneFill, BsCircleFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { TbWorldWww } from 'react-icons/tb';

const CompanyCard = () => {
	// const handleClick = () => {
	// 	window.open(`${url}`);
	// };
	return (
		<div className='company-card'>
			<div className='company-card-top'>
				<div className='comany-card-name'>
					<img src={Logo} alt='' />
					<h2>Prime File Advisors</h2>
				</div>
				<h5>Registered</h5>
				<p>House|Flat|Building|City</p>
			</div>
			<div className='comany-card-details'>
				<button>
					<i>
						<BsFillTelephoneFill />
					</i>
					<p>+91 9876660279</p>
				</button>
				<button>
					<i>
						<GrMail />
					</i>
					<p>primefileadvisors@gmail.com</p>
				</button>
				<button>
					<i>
						<TbWorldWww />
					</i>
					<p>primefileadvisors.com</p>
				</button>
				<span>
					<i>
						<BsCircleFill />
					</i>{' '}
					online (24 &#215; 7)
				</span>
			</div>
		</div>
	);
};

export default CompanyCard;
