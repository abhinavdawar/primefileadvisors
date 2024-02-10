import React from 'react';

const Card1 = ({ Text, color1, color2, icon }) => {
	return (
		<div className='card team-card'>
			<div className='img-section' style={{ '--color2': `${color2}` }}>
				<i>{icon}</i>
			</div>
			<div className='card-desc' style={{ '--color1': `${color1}` }}>
				<div className='card-menu'>
					<div className='dot' style={{ '--color2': `${color2}` }}></div>
					<div className='dot' style={{ '--color2': `${color2}` }}></div>
					<div className='dot' style={{ '--color2': `${color2}` }}></div>
				</div>
				<div className='card-time'>{Text}</div>
			</div>
		</div>
	);
};

export default Card1;
