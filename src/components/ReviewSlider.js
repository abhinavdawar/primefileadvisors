import React from 'react';
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ReviewData from './ReviewData';
import ReviewCard from './ReviewCard';

const ReviewSlider = () => {
	return (
		<div id='reviews'>
			<Swiper
				breakpoints={{
					576: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 3,
					},
				}}
				modules={[Navigation, Pagination]}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
			>
				<div className='slide-content'>
					<div className='card-wrapper'>
						{ReviewData.map((review) => (
							<SwiperSlide key={review.id}>
								<ReviewCard
									key={review.id}
									name={review.name}
									from={review.form}
									reviewText={review.reviewText}
									imageUrl={review.image}
								/>
							</SwiperSlide>
						))}
					</div>
				</div>
			</Swiper>
		</div>
	);
};

export default ReviewSlider;
