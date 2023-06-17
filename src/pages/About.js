import React from 'react';

const About = () => {
	return (
		<div>
			<img src='' alt='' />
			<h1>Who we are</h1>
			<p>
				We are a group of experienced charted accountants having experience of
				more than 4 years. We are bringing our experties in this industry to
				streamline and revolutionarise all the steps involved under one roof
			</p>
			<section
				id='info'
				class='py-5 text-white text-center'
				style={{ color: '#000 !important' }}
			>
				<div class='container'>
					<h2 class='wow fadeIn h1 mt-0'>We Love to Work</h2>
					<p class='wow fadeIn lead text-uppercase text-muted'>
						Let us support you in every step.
					</p>
					<hr class='divider-sm my-3' />
					<div class='row text-success'>
						<div class='wow bounceInLeft col-md-4' data-wow-delay='.3s'>
							<div class='icon rounded mt-3 py-5 bg-white'>
								<i class='fas fa-code fa-3x mb-4'></i>
								<h3 class='h4 mb-2'>Comprehensive Business Support</h3>
							</div>
						</div>
						<div class='wow fadeIn col-md-4' data-wow-offset='200'>
							<div class='icon rounded mt-3 py-5 bg-white'>
								<i class='fas fa-mobile-alt fa-3x mb-4'></i>
								<h3 class='h4 mb-2'>
									Streamlining Acquisition of all necessary financial documents{' '}
								</h3>
							</div>
						</div>
						<div class='wow bounceInRight col-md-4' data-wow-delay='.3s'>
							<div class='icon rounded mt-3 py-5 bg-white'>
								<i class='fas fa-headset fa-3x mb-4'></i>
								<h3 class='h4 mb-2'>
									One stop solution for immigration agencies
								</h3>
							</div>
						</div>
					</div>
					<div class='row my-5'>
						<div class='wow fadeInUpBig col-lg-3 col-6'>
							<h6 class='h1 font-weight-bold'>105</h6>
							<p>Clients</p>
						</div>
						<div class='wow fadeInUpBig col-lg-3 col-6' data-wow-delay='.1s'>
							<h6 class='h1 font-weight-bold'>120</h6>
							<p>Projects</p>
						</div>
						<div class='wow fadeInUpBig col-lg-3 col-6' data-wow-delay='.2s'>
							<h6 class='h1 font-weight-bold'>5000</h6>
							<p>Hours of Service</p>
						</div>
						<div class='wow fadeInUpBig col-lg-3 col-6' data-wow-delay='.3s'>
							<h6 class='h1 font-weight-bold'>20</h6>
							<p>Hard Workers</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
