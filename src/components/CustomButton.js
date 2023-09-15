import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

const CustomButton = ({ route, buttonName }) => {
	return (
		<Fade direction='up'>
			<Link to={route} style={{ textDecoration: 'none' }}>
				<button>{buttonName}</button>
			</Link>
		</Fade>
	);
};

export default CustomButton;
