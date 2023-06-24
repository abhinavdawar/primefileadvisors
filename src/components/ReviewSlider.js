import React, { useEffect, useState, useRef } from 'react';
import ReviewData from './ReviewData';
import ReviewCard from './ReviewCard';
import Slider from 'react-slick';

const ReviewSlider = () => {
	useEffect(() => {
		slideNo();
	}, []);
	const windowSize = useRef([window.innerWidth, window.innerHeight]);
	const [slideShow, setSlideShow] = useState(0);
	const slideNo = () => {
		if (windowSize.current[0] > 900) {
			setSlideShow(2);
		} else {
			setSlideShow(1);
		}
	};
	var settings = {
		dots: true,
		arrows: true,
		autoplay: true,
		slidesToShow: slideShow,
		slidesToScroll: 1,
	};
	return (
		<section id='reviews'>
			<Slider {...settings}>
				{ReviewData.map((review) => (
					<ReviewCard
						key={review.id}
						name={review.name}
						from={review.form}
						reviewText={review.reviewText}
						imageUrl={review.image}
					/>
				))}
			</Slider>
		</section>
	);
};

export default ReviewSlider;
