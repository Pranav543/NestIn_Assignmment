import React from 'react';

const Footer = () => {
	return (
		<div class="ui  vertical footer segment">
			<div class="ui container">
				<div class="ui stackable  divided equal height stackable grid">
					<div class="three wide column">
						<h4 class="ui  header">About</h4>
						<div class="ui  link list">
							<a class="item" href="#root">
								Sitemap
							</a>
							<a class="item" href="#root">
								Contact Us
							</a>
							<a class="item" href="#root">
								About Us
							</a>
							<a class="item" href="#root">
								Terms & Conditions
							</a>
						</div>
					</div>
					<div class="three wide column">
						<h4 class="ui  header">Services</h4>
						<div class="ui  link list">
							<a class="item" href="#root">
								Rooftop Housing
							</a>
							<a class="item" href="#root">
								Pre-fabricated Housing
							</a>
							<a class="item" href="#root">
								Sanitation
							</a>
							<a class="item" href="#root">
								Consultancy
							</a>
						</div>
					</div>
					<div class="seven wide column">
						<h4 class="ui  header">NestIn</h4>
						<p>Email: <a href = "nest-in@tatasteel.com">nest-in@tatasteel.com</a></p>
                        <div>Copyright © nestin.co.in . All right reserved Site Map | Terms & Conditions | Privacy Policy</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
