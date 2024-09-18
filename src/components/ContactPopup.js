import { useEffect, useState } from 'react';
import CustomForm from './CustomForm';
import { IoCloseCircleSharp } from 'react-icons/io5';

const ContactPopup = ({ popup }) => {
	const [close, setClose] = useState(false);

	useEffect(() => {
		setClose(popup);
	}, [popup]);

	return (
		<section
			className={
				!close ? 'contact-popup flex close' : 'contact-popup flex open'
			}
		>
			<div className='contact-popup-details flex-col'>
				<button
					className='close-button'
					onClick={() => {
						setClose(!close);
					}}
				>
					<i>
						<IoCloseCircleSharp />
					</i>
				</button>
				<CustomForm ContactForm />
			</div>
		</section>
	);
};

export default ContactPopup;
