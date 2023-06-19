import React, { useEffect } from 'react';

const OurServices = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className='services-container'>
			<div className='services-landing'>
				<div className='services-text'>
					<h1>Dedicated Team Business Model</h1>
					<p>
						Hire a team of experts selected to meet your business goals. Get
						full transparency across all development stages and bring your
						project to success.
					</p>
				</div>
			</div>
			<section id='pricing' className='shadow-2'>
				<div className='container text-center'>
					<div className='mb-5'>
						<h2 className='h1'>Our Pricing Options</h2>
						<p className='lead w-75 mx-auto'>
							If you have any questions regarding our packages, please refer to
							the F.A.Q or contact our <a href='/'>customer support</a>
						</p>
					</div>
					<div className='row no-gutters package'>
						<div className='col-lg-4 mt-4 '>
							<div className='card'>
								<div className='card-header bg-fancy text-white'>
									<h4>Basic Package</h4>
								</div>
								<div className='card-header bg-white py-4'>
									<h3>
										<sup>$</sup>39.99<small className='h6'>/month</small>
										<br />
										<span className='badge mt-3 font-weight-normal badge-primary'>
											Freelancer
										</span>
									</h3>
								</div>
								<div className='card-body'>
									<ul className='list-group border-0'>
										<li className='list-group-item border-0'>Basic Coverage</li>
										<li className='list-group-item border-0'>
											<s>Advanced Coverage</s>
										</li>
										<li className='list-group-item border-0'>
											Minimal Support
										</li>
										<li className='list-group-item border-0'>Free Updates</li>
										<li className='list-group-item border-0'>
											<s>Free Assets</s>
										</li>
										<li className='list-group-item border-0'>
											<s>Free Premium Themes</s>
										</li>
									</ul>
								</div>
								<div className='card-footer pb-4 border-0 bg-white'>
									<button className='btn btn-lg btn-primary d-block mx-auto'>
										Subscribe
									</button>
								</div>
							</div>
						</div>
						<div className=' col-lg-4 mt-4'>
							<div className='card'>
								<div className='card-header bg-fancy text-white'>
									<h4>Awesome Package</h4>
								</div>
								<div className='card-header bg-white py-4'>
									<h3>
										<sup>$</sup>79.99<small className='h6'>/month</small>
										<br />
										<span className='badge mt-3 font-weight-normal badge-primary'>
											Recommended
										</span>
									</h3>
								</div>
								<div className='card-body'>
									<ul className='list-group border-0'>
										<li className='list-group-item border-0'>Basic Coverage</li>
										<li className='list-group-item border-0'>
											Advanced Coverage
										</li>
										<li className='list-group-item border-0'>
											Minimal Support
										</li>
										<li className='list-group-item border-0'>Free Updates</li>
										<li className='list-group-item border-0'>
											<s>Free Assets</s>
										</li>
										<li className='list-group-item border-0'>
											<s>Free Premium Themes</s>
										</li>
									</ul>
								</div>
								<div className='card-footer pb-4 border-0 bg-white'>
									<button className='btn btn-lg btn-primary d-block mx-auto'>
										Subscribe
									</button>
								</div>
							</div>
						</div>
						<div className='col-lg-4 mt-4'>
							<div className='card'>
								<div className='card-header bg-fancy text-white'>
									<h4>Mega Package</h4>
								</div>
								<div className='card-header bg-white py-4'>
									<h3>
										<sup>$</sup>149.99<small className='h6'>/month</small>
										<br />
										<span className='badge mt-3 font-weight-normal badge-primary'>
											Professional
										</span>
									</h3>
								</div>
								<div className='card-body'>
									<ul className='list-group border-0'>
										<li className='list-group-item border-0'>Basic Coverage</li>
										<li className='list-group-item border-0'>
											Advanced Coverage
										</li>
										<li className='list-group-item border-0'>
											Minimal Support
										</li>
										<li className='list-group-item border-0'>Free Updates</li>
										<li className='list-group-item border-0'>Free Assets</li>
										<li className='list-group-item border-0'>
											Free Premium Themes
										</li>
									</ul>
								</div>
								<div className='card-footer pb-4 border-0 bg-white'>
									<button className='btn btn-lg btn-primary d-block mx-auto'>
										Subscribe
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default OurServices;
